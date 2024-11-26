import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import RoleForm from './components/RoleForm';
import RoleList from './components/RoleList';

const App = () => {
    const [refreshUsers, setRefreshUsers] = useState(false);
    const [refreshRoles, setRefreshRoles] = useState(false);

    const toggleUser Refresh = () => setRefreshUsers(!refreshUsers);
    const toggleRoleRefresh = () => setRefreshRoles(!refreshRoles);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Manage Users</h2>
            <User Form refreshUsers={toggleUser Refresh} />
            <User List refreshUsers={refreshUsers} />

            <h2>Manage Roles</h2>
            <RoleForm refreshRoles={toggleRoleRefresh} />
            <RoleList refreshRoles={refreshRoles} />
        </div>
    );
};

export default App;