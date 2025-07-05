import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to help you with information about Minerstationz. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    'Tell me about your mining projects',
    'Investment opportunities',
    'Sustainability practices',
    'Career opportunities',
    'Contact information',
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(message),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('project') || lowerMessage.includes('mining')) {
      return "We have 6 active mining projects across Tanzania, including gold, diamond, copper, and gemstone operations. You can view detailed information about each project on our Projects page.";
    }
    
    if (lowerMessage.includes('investment') || lowerMessage.includes('investor')) {
      return "We offer compelling investment opportunities with proven returns. Our annual revenue is $250M+ with a 22% profit margin. Visit our Investor Relations page for financial reports and investment details.";
    }
    
    if (lowerMessage.includes('sustainability') || lowerMessage.includes('environment')) {
      return "Sustainability is core to our operations. We've achieved carbon neutrality, planted 1M+ trees, and maintain a 95% waste reduction rate. Learn more on our Sustainability page.";
    }
    
    if (lowerMessage.includes('career') || lowerMessage.includes('job')) {
      return "We're always looking for talented professionals! We currently have openings for Mining Engineers, Environmental Specialists, Safety Officers, and more. Check out our Careers page for current opportunities.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      return "You can reach us at +255 123 456 789 or email us at info@minerstationz.com. Our head office is located at 123 Mining Street, Dar es Salaam, Tanzania.";
    }
    
    return "Thank you for your question! For detailed information, please visit our website pages or contact our team directly at info@minerstationz.com or +255 123 456 789.";
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 bottom-24 z-40 bg-yellow-400 text-black p-4 rounded-full shadow-lg hover:bg-yellow-500 transition-colors hover:scale-110 transform transition-transform"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed right-6 bottom-40 z-40 w-80 h-96 bg-gray-900 rounded-lg shadow-2xl border border-gray-700 flex flex-col"
          >
            {/* Header */}
            <div className="bg-yellow-400 text-black p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">Minerstationz Support</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-yellow-500 p-1 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-gray-800 text-white'
                        : 'bg-yellow-400 text-black'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="p-2 border-t border-gray-700">
              <div className="flex flex-wrap gap-1 mb-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(reply)}
                    className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded hover:bg-gray-700 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  className="bg-yellow-400 text-black p-2 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};