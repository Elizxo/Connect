import React from 'react';
import { Link } from 'react-router-dom';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import { mockEvents, mockCurrentUser } from '../data/mockData';

const ChatPg = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-8rem)] p-6 bg-white">
        <h1 className="text-3xl font-bold mb-6">Chat</h1>
        //Chat box
      </main>
      <Footer />
    </>
  );
};

export default ChatPg;
