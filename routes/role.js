const express = require('express');
const Role = require('../routes/role');
const router = express.Router();

// Get all roles
router.get('/', async (req, res) => {
    const roles = await Role.find();
    res.json(roles);
});

// Create a new role
router.post('/', async (req, res) => {
    const { name, permissions } = req.body;
    const role = new Role({ name, permissions });
    await role.save();
    res.status(201).json(role);
});

// Delete a role
router.delete('/:id', async (req, res) => {
    await Role.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;