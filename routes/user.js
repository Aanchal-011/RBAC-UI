const express = require('express');
const User = require('../routes/user');
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find().populate('roles');
    res.json(users);
});

// Create a new user
router.post('/', async (req, res) => {
    const { username, email, password, roles } = req.body;
    const user = new User({ username, email, password, roles });
    await user.save();
    res.status(201).json(user);
});

// Delete a user
router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;