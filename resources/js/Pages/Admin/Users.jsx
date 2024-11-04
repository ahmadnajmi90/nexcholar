import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Users({ users }) {
    const [searchQuery, setSearchQuery] = useState(''); // State for search input
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const [usersPerPage, setUsersPerPage] = useState(5); // State for number of users per page, default 5

    // Filter users based on search query
    const filteredUsers = users.data.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate the indexes for pagination
    const totalUsers = filteredUsers.length;
    const lastUserIndex = currentPage * usersPerPage;
    const firstUserIndex = lastUserIndex - usersPerPage;
    const currentUsers = filteredUsers.slice(firstUserIndex, lastUserIndex);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <AdminLayout>
            <div className="p-6 bg-white shadow sm:rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Registered Users</h2>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search by name or email"
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1); // Reset to first page on search
                    }}
                    className="mb-4 p-2 border rounded w-full"
                />

                {/* Users Per Page Selector */}
                <div className="mb-4">
                    <label className="mr-2">Show</label>
                    <select
                        value={usersPerPage}
                        onChange={(e) => {
                            setUsersPerPage(Number(e.target.value));
                            setCurrentPage(1); // Reset to first page on change
                        }}
                        className="p-2 border rounded"
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                    <span className="ml-2">entries</span>
                </div>

                {/* User Table */}
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b p-2">#</th>
                            <th className="border-b p-2">Name</th>
                            <th className="border-b p-2">Email</th>
                            <th className="border-b p-2">Role</th>
                            <th className="border-b p-2">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user, index) => (
                            <tr key={user.id}>
                                <td className="p-2 border-b">
                                    {firstUserIndex + index + 1} {/* Serial number */}
                                </td>
                                <td className="p-2 border-b">{user.name}</td>
                                <td className="p-2 border-b">{user.email}</td>
                                <td className="p-2 border-b">{user.user_type}</td>
                                <td className="p-2 border-b">{new Date(user.created_at).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                <div className="flex justify-between items-center mt-4">
                    {/* Previous Page Button */}
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border rounded disabled:opacity-50"
                    >
                        Previous
                    </button>

                    {/* Page Numbers */}
                    <div className="flex space-x-2">
                        {Array.from({ length: Math.ceil(totalUsers / usersPerPage) }, (_, i) => i + 1).map((number) => (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`px-4 py-2 border rounded ${currentPage === number ? 'bg-blue-500 text-white' : ''}`}
                            >
                                {number}
                            </button>
                        ))}
                    </div>

                    {/* Next Page Button */}
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === Math.ceil(totalUsers / usersPerPage)}
                        className="px-4 py-2 border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </AdminLayout>
    );
}
