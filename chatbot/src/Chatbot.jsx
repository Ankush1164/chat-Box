import React, { useState } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleUserInput = (e) => {
        setInput(e.target.value);
    };

    const handleUserMessage = () => {
        if (input.trim() === '') return;

        setMessages([...messages, { text: input }]);
        setInput('');

        generateBotResponse(input);
    };

    const generateBotResponse = (userInput) => {
        let botResponse = '';

        switch (userInput.toLowerCase()) {
            case 'hello':
                botResponse = `Hey! Welcome to SciAstra. How can I help you today? To know more just type \n- what is sciastra`
                break;
            case 'what is sciastra':
                botResponse =  <div>
                <h1>SciAstra is a team of scientists and research scholars from the top research institutes around the world like Oxford, Harvard, Cambridge, and so on. Our vision is to promote critical thinking and scientific temperament by helping students pursue careers in science</h1>
                <p className='underline text-blue-800 font-semibold'>Search other</p>
                <div className='flex gap-5'>
                <h1>features</h1>
                <h1>reach us</h1>
                </div>
            </div>;
                break;
            case 'features':
                botResponse = <div className='flex flex-col gap-2'>
                    <h1>SciAstra offers various features like:-👇</h1>
                    <ol>
                        <li>daily live revision classes</li>
                        <li>doubt-clearing classes</li>
                        <li>mock tests</li>
                        <li>all previous papers with detailed analysis reports</li>
                        <li>a private telegram group</li>
                    </ol>
                    <p className='underline text-blue-800 font-semibold'>Search other</p>
                    <div className='flex gap-5'>
                    <h1>how to get started</h1>
                    <h1>reach us</h1>
                    </div>
                </div>;
                break;
            case 'how to get started':
                botResponse = 'To get started with SciAstra, you can... (provide steps or instructions)';
                break;
            case "reach us":
                botResponse = "To rech us just send a message to support@sciastra.com this mail we will be response within 24 hours";
                break;
            default:
                botResponse = "I'm sorry, I don't have information about that. Could you ask something related to SciAstra?";
        }

        setTimeout(() => {
            setMessages([...messages, { text: botResponse }]);
        }, 500);
    };

    const clearMessage = () => {
        setMessages([])
    }
    return (
        <div className="z-50">
            <div className="bg-white rounded-lg shadow-md p-4 w-96 max-h-80 overflow-y-auto">
                {/* Display the message when user search something */}
                <div className="chatbot-messages">
                    {messages.map((message, index) => (
                        <div key={index} className="text-sm bg-slate-200 px-3 py-1 rounded-md shadow-md mb-3 ">
                            {message.text}
                        </div>
                    ))}
                </div>

                {/* input box where user can type something */}
                <div className="chatbot-input mt-2">
                    <input
                        className="border border-gray-300 rounded-md p-2 w-full mb-3"
                        type="text"
                        placeholder="Type your message..."
                        value={input}
                        onChange={handleUserInput}
                    />
                    <button
                        className="bg-blue-500 text-white rounded-md px-4 py-2 ml-2"
                        onClick={handleUserMessage}>Send</button>

                    <button onClick={clearMessage} className="bg-red-500 text-white rounded-md px-4 py-2 ml-2">Clear All</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
