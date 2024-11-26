import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = ({ refreshUsers }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('/api/users');
            setUsers(response.data);
        };
        fetchUsers();
    }, [refreshUsers]);

    const handleDelete = async (id) => {
        await axios.delete(`/api/users/${id}`);
        setUsers(users.filter(user => user._id !== id));
    };

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.username} - {user.email}
                        <button onClick={() => handleDelete(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;