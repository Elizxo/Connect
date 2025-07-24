import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer';

const ChatPg = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-8rem)] p-6 bg-white">
        <h1 className="text-3xl font-bold mb-6">Chat</h1>
        {/* Your chat content */}
      </main>
      <Footer />
    </>
  );
};

export default ChatPg;
