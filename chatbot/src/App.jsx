import React, { useState } from 'react';
import Chatbot from './Chatbot';

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <>
      <div className="w-screen h-screen bg-red-200">
        <div><h1 className='text-center text-3xl font-semibold'>SciAstra</h1></div>
        {showChatbot && (
          <div className='mr-5 bottom-14 absolute right-0'>
            <Chatbot />
          </div>
        )}

        <div className="w-56 p-2 flex justify-end mr-5 bottom-0 fixed right-0">
          <button onClick={toggleChatbot} className="bg-green-800 text-white px-5 py-2 rounded-md">
            {showChatbot ? 'Hide Box' : 'Show Box'}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
