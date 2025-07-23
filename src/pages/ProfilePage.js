import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { mockCurrentUser } from '../data/mockData';

const ProfilePage = () => {
    return (
        // Main container for the entire page
        <div className="relative min-h-screen overflow-hidden bg-transparent">
            
            {/* ================================
                BACKGROUND STARS (Decorative)
            ================================= */}
            <div className="absolute inset-0 pointer-events-none z-0">
                
                {/* Star - Top Left Corner */}
                <div className="absolute top-6 left-6 text-gray-400 opacity-30">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                </div>

                {/* Star - Top Right Corner */}
                <div className="absolute top-10 right-8 text-gray-400 opacity-25">
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                </div>

                {/* Star - Bottom Left Corner */}
                <div className="absolute bottom-10 left-8 text-gray-400 opacity-20">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                </div>

                {/* Star - Bottom Right Corner */}
                <div className="absolute bottom-12 right-10 text-gray-400 opacity-30">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                </div>
            </div>

            {/* ================================
                PROFILE CARD (MAIN CONTENT)
            ================================= */}
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg relative z-10 mt-10">
                
                {/* Header Section: User Avatar + Name + Email */}
                <div className="flex items-center space-x-6 mb-8">
                    {/* User Icon */}
                    <UserCircleIcon className="h-24 w-24 text-slate-300"/>
                    
                    {/* Name & Email */}
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">{mockCurrentUser.name}</h1>
                        <p className="text-slate-500">{mockCurrentUser.email}</p>
                    </div>
                </div>
                
                {/* ================================
                    FORM SECTION (Editable Info)
                ================================= */}
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
                            className="w-full px-4 py-2 border border-slate-300 rounded-md"
                        ></textarea>
                    </div>

                    {/* Removed Interests Section */}
                    
                    {/* Save Button */}
                    <div className="pt-4">
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
