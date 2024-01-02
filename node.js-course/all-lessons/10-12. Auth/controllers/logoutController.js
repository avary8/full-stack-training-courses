const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const fsPromises = require('fs').promises;
const path = require('path');

const handleLogout = async (req, res) => {
    // on client, also delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // 204 = successful (no content to send back)
    const refreshToken = cookies.jwt;

    // is refreshToken in db ?
    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        return res.sendStatus(204); // 204 = successful (no content to send back)
    }

    // Delete refreshToken in db
    // Saving resfreshToken with current user so we can invalidate it if they want to manually log out
    const otherUsers = usersDB.users.filter(person => person.refreshToken === refreshToken); // all users except current one
    const currentUser = {...foundUser, refreshToken: ''};
    usersDB.setUsers([...otherUsers, currentUser]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'users.json'),
        JSON.stringify(usersDB.users)
    );

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 }); // secure: true - only serve on https
    res.sendStatus(204); // 204 = successful (no content to send back)
}

module.exports = { handleLogout };