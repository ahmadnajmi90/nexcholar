import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        user_type: '', // Updated to match database column
        university: '',
        gov_agency: '', // Updated to match database column
    });

    const [userType, setUserType] = useState('');
    const [showUniversity, setShowUniversity] = useState(false);
    const [showGovAgency, setShowGovAgency] = useState(false);

    useEffect(() => {
        setData('user_type', userType); // Update to match new state variable
    }, [userType, setData]);

    const handleUserTypeChange = (e) => {
        const selectedType = e.target.value;
        setUserType(selectedType);

        setShowUniversity(selectedType === 'PhD Student' || selectedType === 'Academician');
        setShowGovAgency(selectedType === 'Government Agency');
    };

    const submit = (e) => {
        e.preventDefault();

        setData('university', showUniversity ? data.university : '');
        setData('gov_agency', showGovAgency ? data.gov_agency : '');

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="user_type" value="Register As" />
                    <select
                        id="user_type"
                        name="user_type"
                        value={userType}
                        className="mt-1 block w-full"
                        onChange={handleUserTypeChange}
                        required
                    >
                        <option value="">Select Role</option>
                        <option value="PhD Student">PhD Student</option>
                        <option value="Academician">Academician</option>
                        <option value="Researcher">Researcher</option>
                        <option value="Industry">Industry</option>
                        <option value="Government Agency">Government Agency</option>
                    </select>
                    <InputError message={errors.user_type} className="mt-2" />
                </div>

                {showUniversity && (
                    <div className="mt-4">
                        <InputLabel htmlFor="university" value="University" />
                        <select
                            id="university"
                            name="university"
                            value={data.university}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('university', e.target.value)}
                            required
                        >
                            <option value="">Select University</option>
                            <option value="University Malaya">University Malaya</option>
                            <option value="Universiti Teknologi Malaysia">Universiti Teknologi Malaysia</option>
                            <option value="Universiti Sains Malaysia">Universiti Sains Malaysia</option>
                            {/* Add more universities here */}
                        </select>
                        <InputError message={errors.university} className="mt-2" />
                    </div>
                )}

                {showGovAgency && (
                    <div className="mt-4">
                        <InputLabel htmlFor="gov_agency" value="Government Agency" />
                        <select
                            id="gov_agency"
                            name="gov_agency"
                            value={data.gov_agency}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('gov_agency', e.target.value)}
                            required
                        >
                            <option value="">Select Agency</option>
                            <option value="Ministry of Health">Ministry of Health</option>
                            <option value="Ministry of Education">Ministry of Education</option>
                            <option value="Ministry of Finance">Ministry of Finance</option>
                            {/* Add more agencies here */}
                        </select>
                        <InputError message={errors.gov_agency} className="mt-2" />
                    </div>
                )}

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
