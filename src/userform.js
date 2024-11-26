import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ refreshUsers }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [roles, setRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');

    useEffect(() => {
        const fetchRoles = async () => {
            const response = await axios.get('http://localhost:5000/api/roles');
            setRoles(response.data);
        };
        fetchRoles();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser  = { username, email, password, roles: [selectedRole] };
        await axios.post('http://localhost:5000/api/users', newUser );
        refreshUsers();
        setUsername('');
        setEmail('');
        setPassword('');
        setSelectedRole('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                required
            >
                <option value="">Select Role</option>
                {roles.map(role => (
                    <option key={role._id} value={role._id}>{role.name}</option>
                ))}
            </select>
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;