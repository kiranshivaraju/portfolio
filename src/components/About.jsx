import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import UUID generator
import { ABOUT_TEXT } from "../constants";

const About = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState(localStorage.getItem('sessionId'));
  const [sessionTimestamp, setSessionTimestamp] = useState(localStorage.getItem('sessionTimestamp'));
  const [lastActivity, setLastActivity] = useState(Date.now());
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const inactivityTimer = setInterval(() => {
      const currentTime = Date.now();
      if (sessionTimestamp && (currentTime - sessionTimestamp > 5 * 60 * 1000)) { // 5 minutes
        localStorage.removeItem('sessionId');
        localStorage.removeItem('sessionTimestamp');
        setSessionId(null);
        setSessionTimestamp(null);
      }
    }, 1000); // Check every second

    return () => clearInterval(inactivityTimer);
  }, [sessionTimestamp]);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Clear input field immediately after sending
      setInput('');

      // Check if sessionId exists; if not, create it
      if (!sessionId) {
        const newSessionId = uuidv4();
        setSessionId(newSessionId);
        localStorage.setItem('sessionId', newSessionId);
        
        // Store the current timestamp when creating a new session ID
        const timestamp = Date.now();
        setSessionTimestamp(timestamp);
        localStorage.setItem('sessionTimestamp', timestamp);
      } else {
        // Update last activity time on each input
        const timestamp = Date.now();
        setSessionTimestamp(timestamp);
        localStorage.setItem('sessionTimestamp', timestamp);
      }

      // Prepare request body
      const requestBody = {
        input: input,
        sessionId: sessionId || localStorage.getItem('sessionId'),
      };

      setLoading(true); // Set loading state to true

      try {
        const response = await fetch("https://portfolio-backend-mxxh.onrender.com/chat", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const botResponse = data.message || 'Sorry, I didn’t get that.';

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: 'bot' },
        ]);
      } catch (error) {
        console.error('Error:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Error communicating with the bot. Please try again.', sender: 'bot' },
        ]);
      } finally {
        setLoading(false); // Reset loading state
      }

      setLastActivity(Date.now()); // Update last activity time
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
      e.preventDefault();
    }
  };

  const handleUserActivity = () => {
    setLastActivity(Date.now()); // Reset last activity time on user activity
  };

  // Function to render messages with links
  const renderMessage = (message) => {
    const urlRegex = /(https?:\/\/[^\s.]+(?:\.[^\s.]+)+)/g; // Regex to find URLs
    const parts = message.text.split(urlRegex); // Split message text by URL

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="border-b border-neutral-900 pb-4" onClick={handleUserActivity}>
      <h1 className="my-20 text-center text-4xl">About 
          <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 whitespace-pre-line">{ABOUT_TEXT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="border rounded-lg p-4 h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`my-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                  {renderMessage(message)}
                </span>
              </div>
            ))}
            {loading && (
              <div className="text-center my-2">
                <span className="loader">Loading...</span> {/* Replace with a loading spinner if you have one */}
              </div>
            )}
          </div>
          <div className="flex mt-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="border rounded-l-lg p-2 flex-grow text-black"
              placeholder="Type your question..."
              onFocus={handleUserActivity} // Reset activity on focus
            />
            <button onClick={handleSend} className="bg-blue-500 text-white rounded-r-lg p-2">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;