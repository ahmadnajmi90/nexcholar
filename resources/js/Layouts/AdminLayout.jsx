import Sidebar from '@/Components/Sidebar';
import { useState } from 'react';

export default function AdminLayout({ children, userType }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen">
            {/* Sidebar overlay for mobile */}
            <div
                className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity lg:hidden ${
                    isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsSidebarOpen(false)}
            ></div>

            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} userType={userType} />

            {/* Main Content Area */}
            <div className="flex-1 lg:ml-64 p-6 bg-gray-100">
                {/* Toggle Button */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 text-gray-800 bg-gray-200 rounded-md lg:hidden"
                >
                    {/* Simple icon for a hamburger menu */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-8 6h8"
                        />
                    </svg>
                </button>

                {/* Page Content */}
                {children}
            </div>
        </div>
    );
}
