import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ChatInterface from './ChatInterface';
import { mockCurrentUser } from '../data/mockData';

const ChatPage = () => {
    const { userId } = useParams();
    const user = mockCurrentUser.matches.find(match => match.user.id.toString() === userId)?.user;

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="p-4 bg-white shadow flex justify-between items-center">
                <Link to="/dashboard" className="text-blue-500 font-semibold">
                    Back
                </Link>
                <h2 className="text-lg font-bold">
                    Chat with {user ? user.name : 'User'}
                </h2>
            </div>
            <div className="flex-1 overflow-hidden">
                <ChatInterface />
            </div>
        </div>
    );
};

export default ChatPage;

