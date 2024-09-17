// frontend/src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';

const Home = () => {
    const [users, setUsers] = useState([]); // Initialize as an empty array
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const usersPerPage = 20; // Set to 20 records per page

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/auth/users?page=${currentPage}&limit=${usersPerPage}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsers(data.users || []); // Ensure users is an array
                setTotalPages(data.totalPages || 0); // Ensure totalPages is a number
            } catch (error) {
                console.error('Error fetching users:', error);
                setUsers([]); // Reset users on error
                setTotalPages(0); // Reset total pages on error
            }
        };
        fetchUsers();
    }, [currentPage]);

    return (
        <div>
            <h1>Home</h1>
            <h2>Users:</h2>
            <ul>
                {users.length > 0 ? (
                    users.map(user => (
                        <li key={user._id}>{user.username}</li>
                    ))
                ) : (
                    <li>No users found.</li>
                )}
            </ul>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
    );
};

export default Home;