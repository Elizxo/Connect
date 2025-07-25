import React, { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { mockCurrentUser } from '../data/mockData';

// Star Component
const Star = ({ size }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="text-gray-400"
    >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const ProfilePage = () => {
    const [buttonState, setButtonState] = useState('default'); // Tracks button status

    const handleSave = (e) => {
        e.preventDefault();
        setButtonState('loading');

        // Simulate saving process
        setTimeout(() => {
            setButtonState('success');

            // Revert to default after 2 seconds
            setTimeout(() => setButtonState('default'), 2000);
        }, 1500);
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-transparent">
            {/* =========================
                STARS BACKGROUND
            ========================== */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Top Stars */}
                <div className="absolute top-6 left-6 opacity-30"><Star size={40} /></div>
                <div className="absolute top-10 right-8 opacity-25"><Star size={35} /></div>
                <div className="absolute top-20 left-1/3 opacity-20"><Star size={20} /></div>
                <div className="absolute top-5 right-1/4 opacity-35"><Star size={28} /></div>

                {/* Middle Stars */}
                <div className="absolute top-1/2 left-10 opacity-25"><Star size={18} /></div>
                <div className="absolute top-1/3 right-1/3 opacity-30"><Star size={25} /></div>
                <div className="absolute top-2/3 left-1/2 opacity-20"><Star size={22} /></div>

                {/* Bottom Stars */}
                <div className="absolute bottom-10 left-8 opacity-20"><Star size={32} /></div>
                <div className="absolute bottom-12 right-10 opacity-30"><Star size={28} /></div>
                <div className="absolute bottom-20 left-1/4 opacity-15"><Star size={24} /></div>
                <div className="absolute bottom-1/4 right-1/4 opacity-25"><Star size={30} /></div>
            </div>

            {/* Profile Card */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg relative z-10 mt-10 overflow-hidden">
                {/* Gradient Bar */}
                <div className="h-2 w-full bg-gradient-to-r from-pink-500 via-pink-400 to-orange-400"></div>

                {/* Profile Content */}
                <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center space-x-6 mb-8">
                        <UserCircleIcon className="h-24 w-24 text-slate-300" />
                        <div>
                            <h1 className="text-3xl font-bold text-slate-800">{mockCurrentUser.name}</h1>
                            <p className="text-slate-500">{mockCurrentUser.email}</p>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-6" onSubmit={handleSave}>
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                            <input
                                type="text"
                                defaultValue={mockCurrentUser.name}
                                className="w-full px-4 py-2 border border-slate-300 rounded-md"
                            />
                        </div>

                        {/* Home City */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Home City</label>
                            <input
                                type="text"
                                defaultValue={mockCurrentUser.city}
                                className="w-full px-4 py-2 border border-slate-300 rounded-md"
                            />
                        </div>

                        {/* Bio */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Short Bio</label>
                            <textarea
                                defaultValue={mockCurrentUser.bio}
                                rows="4"
                                className="w-full px-4 py-2 border border-slate-300 rounded-md"
                            ></textarea>
                        </div>

                        {/* Save Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className={`save-button-pfp ${buttonState}`}
                            >
                                {buttonState === 'loading'
                                    ? 'Saving...'
                                    : buttonState === 'success'
                                    ? 'Updates saved successfully'
                                    : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
