import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RoleList = ({ refreshRoles }) => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const fetchRoles = async () => {
            const response = await axios.get('/api/roles');
            setRoles(response.data);
        };
        fetchRoles();
    }, [refreshRoles]);

    const handleDelete = async (id) => {
        await axios.delete(`/api/roles/${id}`);
        setRoles(roles.filter(role => role._id !== id));
    };

    return (
        <div>
            <h2>Role List</h2>
            <ul>
                {roles.map(role => (
                    <li key={role._id}>
                        {role.name}
                        <button onClick={() => handleDelete(role._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoleList;