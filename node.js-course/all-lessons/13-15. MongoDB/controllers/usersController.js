const User = require('../model/User');


const getUser = async (req, res) => {
    if (!req?.params?.id){
        return res.status(400).json({ 'message': 'User ID is required' })
    }
    const user = await User.findOne({ _id: req.params.id }).exec();
    if (!user){
        return res.status(400).json({ 'message': `User ID ${req.body.id} not found` });
    }
    res.json(user);
}

const getAllUsers = async (req, res) => {
    const users = await User.find();
    if (!users) {
        return res.status(204).json({ "message": 'No users found' });
    }
    res.json(users);
}

const createNewUser = async (req, res) => {
    if (!req?.body?.username || !req?.body?.password){
        return res.status(400).json({ 'message': 'username and password are required' });
    }
    try {
        const result = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        res.status(201).json(result);
    } catch (err){ 
        console.error(err);
    }
}
/*
const updateUser = async (req, res) => {
    if (!req?.body?.id){
        return res.status(400).json({ 'message': 'ID parameter is required' })
    }

    const User = await User.findOne({ _id: req.body.id }).exec();
    if (!User){
        return res.status(400).json({ 'message': `No User matches ID ${req.body.id}` });
    }
    
    if (req.body?.firstName){
        User.firstName = req.body.firstName;
    }
    if (req.body?.lastName){
        User.lastName = req.body.lastName;
    }

    const result = await User.save();
    res.json(result);
}
*/

const deleteUser = async (req, res) => {
    if (!req?.body?.id){
        return res.status(400).json({ 'message': 'User ID is required' })
    }

    const user = await User.findOne({ _id: req.body.id }).exec();
    if (!user){
        return res.status(400).json({ 'message': `User ID ${req.body.id} not found` });
    }

    const result = await User.deleteOne({ _id: req.body.id });
    res.json(result);
}

module.exports = {
    getUser,
    getAllUsers,
    createNewUser,
    //updateUser,
    deleteUser
}