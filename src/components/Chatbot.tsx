import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

interface Message {
  type: 'bot' | 'user';
  text: string;
  timestamp: number;
}

interface ChatResponse {
  message: string;
  sessionId: string;
}

export default function Chatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Generate a unique session ID when chat starts
    const newSessionId = Math.random().toString(36).substring(7);
    setSessionId(newSessionId);
    
    // Initial bot message
    setMessages([{
      type: 'bot',
      text: 'Welcome to E.T Carpet Cleaning! How can I help you today? You can ask about:\n\n• Our services and pricing\n• Booking appointments\n• Service areas\n• Cleaning methods\n• Special offers',
      timestamp: Date.now()
    }]);
  }, []);

  const sendMessageToN8N = async (message: string): Promise<ChatResponse> => {
    try {
      const response = await fetch('https://n8n.devlewiso.tech/webhook-test/05fcfb6d-79a8-4c10-b08a-ac315fe7f51a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          sessionId,
          timestamp: Date.now()
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending message:', error);
      return {
        message: 'I apologize, but I\'m having trouble connecting right now. Please try again later or call us at (805) 704-2301.',
        sessionId
      };
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = {
      type: 'user' as const,
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await sendMessageToN8N(input);
      
      const botMessage = {
        type: 'bot' as const,
        text: response.message,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error in chat:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-96 bg-white rounded-xl shadow-2xl z-50">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Chat with Us</h3>
      </div>
      
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <pre className="whitespace-pre-wrap font-sans">{message.text}</pre>
              <div className="text-xs mt-1 opacity-70">
                {new Date(message.timestamp).toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 p-3 rounded-lg">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-600"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition disabled:opacity-50"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
