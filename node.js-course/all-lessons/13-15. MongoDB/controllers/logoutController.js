const User = require('../model/User');

const handleLogout = async (req, res) => {
    // on client, also delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // 204 = successful (no content to send back)
    const refreshToken = cookies.jwt;

    // is refreshToken in db ?
    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        return res.sendStatus(204); // 204 = successful (no content to send back)
    }

    // Delete refreshToken in db
    foundUser.refreshToken = '';
    const result = await foundUser.save();

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 }); // secure: true - only serve on https
    res.sendStatus(204); // 204 = successful (no content to send back)
}

module.exports = { handleLogout };