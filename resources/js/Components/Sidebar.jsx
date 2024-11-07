import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { HomeIcon, UserGroupIcon, Cog6ToothIcon, UserIcon, ArrowLeftOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function Sidebar() {
    const { auth } = usePage().props;
    const userType = auth.user ? auth.user.user_type : 'Guest';
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div className={`bg-white h-full ${isCollapsed ? 'w-20' : 'w-64'} fixed left-0 top-0 flex flex-col transition-all duration-300 ease-in-out`}>
            {/* Sidebar Header with Toggle Button */}
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                    {/* Toggle Button */}
                    <button onClick={toggleCollapse} className="focus:outline-none hover:bg-gray-200 p-1 rounded-full">
                        <Bars3Icon className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Header Text */}
                    {!isCollapsed && <span className="ml-3 text-xl font-semibold text-gray-800">Nexscholar</span>}
                </div>
            </div>

            {/* Sidebar Links */}
            <nav className="flex flex-col space-y-1">
                <Link href={route('dashboard')} className="py-2 px-3 hover:bg-gray-200 rounded flex items-center">
                    <HomeIcon className="h-5 w-5 text-gray-600" />
                    <span className={`${isCollapsed ? 'hidden' : 'ml-3'}`}>Dashboard</span>
                </Link>

                {userType === 'admin' && (
                    <>
                        <Link href={route('admin.users')} className="py-2 px-3 hover:bg-gray-200 rounded flex items-center">
                            <UserGroupIcon className="h-5 w-5 text-gray-600" />
                            <span className={`${isCollapsed ? 'hidden' : 'ml-3'}`}>Manage Users</span>
                        </Link>
                        <Link href={route('users.index')} className="py-2 px-3 hover:bg-gray-200 rounded flex items-center">
                            <UserIcon className="h-5 w-5 text-gray-600" />
                            <span className={`${isCollapsed ? 'hidden' : 'ml-3'}`}>User Management</span>
                        </Link>
                        <Link href={route('admin.settings')} className="py-2 px-3 hover:bg-gray-200 rounded flex items-center">
                            <Cog6ToothIcon className="h-5 w-5 text-gray-600" />
                            <span className={`${isCollapsed ? 'hidden' : 'ml-3'}`}>Settings</span>
                        </Link>
                    </>
                )}

                {userType === 'Academician' && (
                    <>
                        <Link href={route('admin.users')} className="py-2 px-3 hover:bg-gray-200 rounded flex items-center">
                            <UserGroupIcon className="h-5 w-5 text-gray-600" />
                            <span className={`${isCollapsed ? 'hidden' : 'ml-3'}`}>Mans</span>
                        </Link>
                        <Link href={route('users.index')} className="py-2 px-3 hover:bg-gray-200 rounded flex items-center">
                            <UserIcon className="h-5 w-5 text-gray-600" />
                            <span className={`${isCollapsed ? 'hidden' : 'ml-3'}`}>Userement</span>
                        </Link>
                        <Link href={route('academician.editP')} className="py-2 px-3 hover:bg-gray-200 rounded flex items-center">
                            <UserIcon className="h-5 w-5 text-gray-600" />
                            <span className={`${isCollapsed ? 'hidden' : 'ml-3'}`}>Edit Profile</span>
                        </Link>
                    </>
                )}

                {/* Common Links */}
                <Link href={route('profile.edit')} className="py-2 px-3 hover:bg-gray-200 rounded flex items-center">
                    <UserIcon className="h-5 w-5 text-gray-600" />
                    <span className={`${isCollapsed ? 'hidden' : 'ml-3'}`}>Profile</span>
                </Link>
                <Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    className="py-2 px-3 w-full text-left hover:bg-gray-200 rounded flex items-center"
                >
                    <ArrowLeftOnRectangleIcon className="h-5 w-5 text-gray-600" />
                    <span className={`${isCollapsed ? 'hidden' : 'ml-3'}`}>Log Out</span>
                </Link>
            </nav>

            {/* Optional Footer */}
            <div className="mt-auto space-y-1">
                {/* Additional links or information can go here */}
            </div>
        </div>
    );
}
