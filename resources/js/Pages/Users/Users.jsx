
import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Users({ user, users }) {

    return (
        <AdminLayout
        user={user}>
            <div className="p-6 bg-white shadow sm:rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Registered Users</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of registration</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Last Update</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {users.map((user) => ( // Loop through the users array
                                <tr>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{user.name}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.created_at}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.updated_at}</td>
                                <td className="whitespace-nowrap px-4 py-2">
                                <a
                                    href="#"
                                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                >
                                    View
                                </a>
                                </td>
                                </tr>
                            ))}



                        </tbody>
                    </table>
                    </div>
            </div>
        </AdminLayout>
    );
}


