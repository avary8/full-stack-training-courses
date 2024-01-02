const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const fsPromises = require('fs').promises;
const path = require('path');


const handleLogin = async (req, res) => {
    const { user, pw } = req.body;
    if (!user || !pw) return res.status(400).json({ 'message': 'Username and password are required' });

    const foundUser = usersDB.users.find(person => person.username === user);
    if (!foundUser) return res.sendStatus(401); // 401 = Unauthorized

    // evaluate password
    const match = await bcrypt.compare(pw, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles);
        // create JWTs 
        const accessToken = jwt.sign(
            { 
                "UserInfo": {
                    "username": foundUser.username,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        // Saving resfreshToken with current user so we can invalidate it if they want to manually log out
        const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username); // all users except current one
        const currentUser = { ...foundUser, refreshToken };
        usersDB.setUsers([...otherUsers, currentUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );
        // send refreshToken in an httpOnly cookie since it cannot be accessed via JS
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 }); 
        // in production add -> secure: true <- to only serve on https
        // remove secure:true when testing refreshToken in postman/thunderclient
        res.json({ accessToken });
    } else {
        res.sendStatus(401);
    }
}


module.exports = { handleLogin };