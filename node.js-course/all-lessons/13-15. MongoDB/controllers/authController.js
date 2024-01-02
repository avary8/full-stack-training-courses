const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
    const { user, pw } = req.body;
    if (!user || !pw) return res.status(400).json({ 'message': 'Username and password are required' });

    const foundUser = await User.findOne({ username: user }).exec();
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
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save(); // this will save changes made here to MongoDB
        
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