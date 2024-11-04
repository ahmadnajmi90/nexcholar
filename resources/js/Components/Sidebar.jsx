import { Link, usePage } from '@inertiajs/react';

export default function Sidebar({ isCollapsed }) {
    const { auth } = usePage().props;
    const userType = auth.user ? auth.user.user_type : 'Guest'; // Default to 'Guest' if not logged in

    console.log("User Type:", userType); // Print userType in the console for debugging



    return (
        <div className={`bg-gray-800 text-white h-full ${isCollapsed ? 'w-20' : 'w-64'} fixed left-0 top-0 flex flex-col p-4 transition-width duration-300 ease-in-out`}>
            {/* Sidebar Header */}
            <div className="text-xl font-semibold mb-4 flex items-center justify-center">
                {isCollapsed ? (
                    <span>AP</span> // Short form for Admin Panel or Academician Panel
                ) : (
                    <span>{userType === 'admin' ? 'Nexscholar' : 'Academician Panel'}</span>
                )}
            </div>

            {/* Sidebar Links */}
            <nav className="flex flex-col space-y-1">
                <Link href={route('dashboard')} className="py-2 px-3 hover:bg-gray-700 rounded">
                    {!isCollapsed && <span>Dashboard</span>}
                </Link>
                {/* Academician-Specific Links */}
                {userType === 'admin' && (

                    <>
                        <Link href={route('admin.users')} className="py-2 px-3 hover:bg-gray-700 rounded">
                            {!isCollapsed && <span>Manage Users</span>}
                        </Link>
                        <Link href={route('users.index')} className="py-2 px-3 hover:bg-gray-700 rounded">
                            {!isCollapsed && <span>User Management</span>}
                        </Link>
                        <Link href={route('admin.settings')} className="py-2 px-3 hover:bg-gray-700 rounded">
                            {!isCollapsed && <span>Settings</span>}
                        </Link>
                    </>
                )}


                {/* Academician-Specific Links */}
                {userType === 'Academician' && (
                    <>
                         <Link href={route('admin.users')} className="py-2 px-3 hover:bg-gray-700 rounded">
                            {!isCollapsed && <span>Mans</span>}
                        </Link>
                        <Link href={route('users.index')} className="py-2 px-3 hover:bg-gray-700 rounded">
                            {!isCollapsed && <span>Userement</span>}
                        </Link>
                        <Link href={route('academician.edit')} className="py-2 px-3 hover:bg-gray-700 rounded">
                            Edit Profile
                        </Link>
                    </>
                )}

                {/* Common Links */}
                <Link href={route('profile.edit')} className="py-2 px-3 hover:bg-gray-700 rounded">
                    {!isCollapsed && <span>Profile</span>}
                </Link>
                <Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    className="py-2 px-3 w-full text-left hover:bg-gray-700 rounded"
                >
                    {!isCollapsed && <span>Log Out</span>}
                </Link>
            </nav>

            {/* Optional Footer or Additional Links */}
            <div className="mt-auto space-y-1">
                {/* You can add any additional information or links here */}
            </div>
        </div>
    );
}




// import { Link, usePage } from '@inertiajs/react';

// export default function Sidebar({ isCollapsed }) {
//     const { auth } = usePage().props;
//     const userType = auth.user ? auth.user.user_type : 'Guest'; // Default to 'Guest' if not logged in

//     console.log("User Type:", userType); // Print userType in the console for debugging

//     return (
//         <div className={`bg-gray-800 text-white h-full ${isCollapsed ? 'w-20' : 'w-64'} fixed left-0 top-0 flex flex-col p-4 transition-width duration-300 ease-in-out`}>
//             {/* Sidebar Header */}
//             <div className="text-xl font-semibold mb-4 flex items-center justify-center">
//                 {isCollapsed ? (
//                     <span>AP</span> // Short form for Admin Panel
//                 ) : (
//                     <span>{userType === 'admin' ? 'Admin Panel' : 'Academician Panel'}</span>
//                 )}
//             </div>

//             {/* Print userType directly on the sidebar */}
//             <div className="mb-4 text-sm text-gray-400 text-center">
//                 User Type: {userType}
//             </div>

//             {/* Sidebar Links */}
//             <nav className="flex flex-col space-y-1">
//                 <Link href={route('dashboard')} className="py-2 px-3 hover:bg-gray-700 rounded">
//                     {!isCollapsed && <span>Dashboard</span>}
//                 </Link>

//            {/* Academician-Specific Links */}
//            {userType === 'admin' && (

//                     <>
//                         <Link href={route('admin.users')} className="py-2 px-3 hover:bg-gray-700 rounded">
//                             {!isCollapsed && <span>Manage Users</span>}
//                         </Link>
//                         <Link href={route('users.index')} className="py-2 px-3 hover:bg-gray-700 rounded">
//                             {!isCollapsed && <span>User Management</span>}
//                         </Link>
//                         <Link href={route('admin.settings')} className="py-2 px-3 hover:bg-gray-700 rounded">
//                             {!isCollapsed && <span>Settings</span>}
//                         </Link>
//                     </>
//                 )}

//                 {/* Admin-Specific Links */}
//                 {userType === 'Academician' && (
//                     <>
//                         <Link href={route('admin.users')} className="py-2 px-3 hover:bg-gray-700 rounded">
//                             {!isCollapsed && <span>Research</span>}
//                         </Link>
//                         <Link href={route('users.index')} className="py-2 px-3 hover:bg-gray-700 rounded">
//                             {!isCollapsed && <span>Research</span>}
//                         </Link>
//                         <Link href={route('admin.settings')} className="py-2 px-3 hover:bg-gray-700 rounded">
//                             {!isCollapsed && <span>Research</span>}
//                         </Link>
//                     </>
//                 )}


//             </nav>
//         </div>
//     );
// }
