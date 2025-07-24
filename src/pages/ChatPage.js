import React from 'react';
import { Link } from 'react-router-dom';
import { mockEvents, mockCurrentUser } from '../data/mockData';


const ChatPg = () => {
  return (
    <main className="min-h-[calc(100vh-8rem)] p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">Chat Page</h1>
      {/* chat */}
      <p>Welcome to the chat! Start a conversation here.</p>
    </main>
  );
};

export default ChatPg;

