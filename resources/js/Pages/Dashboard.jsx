//import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ userType }) {
    return (
        <AdminLayout userType={userType}>
           <Head title="Dashboard" />

<div className="p-4 bg-white rounded-lg shadow">
    <h1 className="text-2xl font-semibold">Welcome { userType }</h1>
    <p className="mt-4">You're logged in!</p>
</div>
        </AdminLayout>
    );
}

