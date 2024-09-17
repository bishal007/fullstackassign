import React, { useEffect, useState, useContext } from 'react';
import Pagination from './Pagination';
import { UserContext } from '../context/UserContext';

const UserList = () => {
    const { users, fetchUsers, totalPages } = useContext(UserContext);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    useEffect(() => {
        fetchUsers(currentPage, usersPerPage);
    }, [currentPage]);

    return (
        <div>
            <ul>
                {users.map(user => <li key={user._id}>{user.username}</li>)}
            </ul>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
    );
};

export default UserList;