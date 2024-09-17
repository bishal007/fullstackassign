import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const fetchUsers = async (page) => {
        const limit = 20; // Set limit to 20
        const response = await fetch(`http://localhost:5000/api/auth/users?page=${page}&limit=${limit}`);
        const data = await response.json();
        setUsers(data.users);
        setTotalPages(data.totalPages);
    };

    return (
        <UserContext.Provider value={{ users, fetchUsers, totalPages }}>
            {children}
        </UserContext.Provider>
    );
};