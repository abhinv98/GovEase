// src/components/dashboard/ai-assistant/ChatInput.tsx

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, XCircle } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [inputMessage, setInputMessage] = useState('');

  const handleSend = () => {
    if (inputMessage.trim() && !isLoading) {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="p-4 border-t bg-white">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSend();
              }
            }}
          />
          {inputMessage && (
            <button
              onClick={() => setInputMessage('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <XCircle className="h-5 w-5" />
            </button>
          )}
        </div>
        <Button
          className="bg-blue-600 hover:bg-blue-700 gap-2"
          onClick={handleSend}
          disabled={!inputMessage.trim() || isLoading}
        >
          <Send className="h-4 w-4" />
          Send
        </Button>
      </div>
    </div>
  );
}