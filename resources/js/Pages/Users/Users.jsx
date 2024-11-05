
import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Tab } from '@headlessui/react';
import Table from '@/Components/Table';
import { Head } from '@inertiajs/react';

export default function Users({ user, users }) {

    return (
        <AdminLayout
        user={user}>

        <Head title="Users" />

            <div className="p-6 bg-white shadow sm:rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Registered Users</h2>

            <Table users={users} />

            </div>
        </AdminLayout>
    );
}


