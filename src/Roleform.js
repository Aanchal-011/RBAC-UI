import React, { useState } from 'react';
import axios from 'axios';

const RoleForm = ({ refreshRoles }) => {
    const [roleName, setRoleName] = useState('');
    const [permissions, setPermissions] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRole = { name: roleName, permissions: permissions.split(',') };
        await axios.post('/api/roles', newRole);
        refreshRoles();
        setRoleName('');
        setPermissions('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Role Name"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Permissions (comma separated)"
                value={permissions}
                onChange={(e) => setPermissions(e.target.value)}
                required
            />
            <button type="submit">Add Role</button>
        </form>
    );
};

export default RoleForm;