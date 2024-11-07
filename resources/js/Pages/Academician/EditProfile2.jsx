import React, { useState } from 'react';
//import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function EditProfile() {
    const { academician } = usePage().props;

    const [formData, setFormData] = useState({
        full_name: academician.full_name || '',
        email: academician.email || '',
        phone_number: academician.phone_number || '',
        profile_picture: academician.profile_picture || '',
        current_position: academician.current_position || '',
        department: academician.department || '',
        university: academician.university || '',
        highest_degree: academician.highest_degree || '',
        field_of_study: academician.field_of_study || '',
        research_interests: academician.research_interests || '',
        ongoing_research: academician.ongoing_research || '',
        website: academician.website || '',
        linkedin: academician.linkedin || '',
        google_scholar: academician.google_scholar || '',
        researchgate: academician.researchgate || '',
        orcid: academician.orcid || '',
        bio: academician.bio || '',
        availability_for_collaboration: academician.availability_for_collaboration,
        availability_as_supervisor: academician.availability_as_supervisor,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/academician/update', formData);
    };

    return (
        <AdminLayout>
            <div className="p-6 bg-white shadow sm:rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Update Profile</h2>


                <form onSubmit={handleSubmit}>
                    <label className="block mb-2">Full Name:</label>
                    <input
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        className="mb-4 p-2 border rounded w-full"
                    />

                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mb-4 p-2 border rounded w-full"
                    />

                    <label className="block mb-2">Phone Number:</label>
                    <input
                        type="text"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        className="mb-4 p-2 border rounded w-full"
                    />

                    <label className="block mb-2">Current Position:</label>
                    <input
                        type="text"
                        name="current_position"
                        value={formData.current_position}
                        onChange={handleChange}
                        className="mb-4 p-2 border rounded w-full"
                    />

                    {/* Repeat for each additional field as needed */}
                    {/* Add similar input fields for department, university, etc. */}

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
}
