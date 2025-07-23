import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { mockCurrentUser } from '../data/mockData';

const ProfilePage = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-transparent">
            
            {/* Stars Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Star Top-Left */}
                <div className="absolute top-6 left-6 text-gray-400 opacity-30">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                </div>
                {/* ADD STARS SECTION */}
            </div>

            {/* Profile Card */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg relative z-10 mt-10 overflow-hidden">
                
                {/* Gradient Bar (Pink to Orange) */}
                <div className="h-2 w-full bg-gradient-to-r from-pink-500 via-pink-400 to-orange-400"></div>
                
                {/* Profile Content */}
                <div className="p-8">
                    
                    {/* Header with Avatar and Name */}
                    <div className="flex items-center space-x-6 mb-8">
                        <UserCircleIcon className="h-24 w-24 text-slate-300" />
                        <div>
                            <h1 className="text-3xl font-bold text-slate-800">{mockCurrentUser.name}</h1>
                            <p className="text-slate-500">{mockCurrentUser.email}</p>
                        </div>
                    </div>

                    {/* Form Section */}
                    <form className="space-y-6">
                        
                        {/* Name Input */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                            <input 
                                type="text" 
                                defaultValue={mockCurrentUser.name} 
                                className="w-full px-4 py-2 border border-slate-300 rounded-md" 
                            />
                        </div>

                        {/* Home City Input */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Home City</label>
                            <input 
                                type="text" 
                                defaultValue={mockCurrentUser.city} 
                                className="w-full px-4 py-2 border border-slate-300 rounded-md" 
                            />
                        </div>

                        {/* Short Bio Textarea */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Short Bio</label>
                            <textarea 
                                defaultValue={mockCurrentUser.bio} 
                                rows="4" 
                                className="w-full px-4 py-2 border border-slate-300 rounded-md">
                            </textarea>
                        </div>

                        {/* Save Button */}
                        <div className="pt-4">
                            <button type="submit" className="save-button-pfp">
                                Save Changes
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
