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
                
                {/* Top Area Stars */}
                <div className="absolute top-6 left-6 text-gray-400 opacity-30">
                    <Star size={40}/>
                </div>
                <div className="absolute top-10 right-8 text-gray-400 opacity-25">
                    <Star size={35}/>
                </div>
                <div className="absolute top-20 left-1/3 text-gray-400 opacity-20">
                    <Star size={20}/>
                </div>
                <div className="absolute top-5 right-1/4 text-gray-400 opacity-35">
                    <Star size={28}/>
                </div>

                {/* Middle Stars */}
                <div className="absolute top-1/2 left-10 text-gray-400 opacity-25">
                    <Star size={18}/>
                </div>
                <div className="absolute top-1/3 right-1/3 text-gray-400 opacity-30">
                    <Star size={25}/>
                </div>
                <div className="absolute top-2/3 left-1/2 text-gray-400 opacity-20">
                    <Star size={22}/>
                </div>

                {/* Bottom Stars */}
                <div className="absolute bottom-10 left-8 text-gray-400 opacity-20">
                    <Star size={32}/>
                </div>
                <div className="absolute bottom-12 right-10 text-gray-400 opacity-30">
                    <Star size={28}/>
                </div>
                <div className="absolute bottom-20 left-1/4 text-gray-400 opacity-15">
                    <Star size={24}/>
                </div>
                <div className="absolute bottom-1/4 right-1/4 text-gray-400 opacity-25">
                    <Star size={30}/>
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
