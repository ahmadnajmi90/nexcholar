import React, { useState, useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/react';

export default function EditProfile() {
    const { academician } = usePage().props; // Get the academician data passed from the controller
    const { data, setData, post, processing, errors } = useForm({
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
        availability_for_collaboration: academician.availability_for_collaboration || '',
        availability_as_supervisor: academician.availability_as_supervisor || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('academician.updateP'));
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        value={data.full_name}
                        onChange={(e) => setData('full_name', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    />
                    {errors.full_name && <div className="text-red-600">{errors.full_name}</div>}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    />
                    {errors.email && <div className="text-red-600">{errors.email}</div>}
                </div>

                {/* Add similar fields for phone_number, profile_picture, current_position, etc. */}
                {/* Example Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="text"
                        value={data.phone_number}
                        onChange={(e) => setData('phone_number', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    />
                    {errors.phone_number && <div className="text-red-600">{errors.phone_number}</div>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    {processing ? 'Updating...' : 'Update Profile'}
                </button>
            </form>
        </div>
    );
}
