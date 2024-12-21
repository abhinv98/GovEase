// src/components/dashboard/ai-assistant/ChatMessage.tsx

"use client";

import React, { useMemo } from 'react';
import { Bot, User } from 'lucide-react';
import type { Message } from '@/types/chat';

interface ChatMessageProps {
  message: Message;
}

const formatTimestamp = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  
  if (diff < 1000) return 'Just now';
  if (diff < 60000) return 'Less than a minute ago';
  if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000);
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  }
  return new Date(timestamp).toLocaleTimeString();
};

export default function ChatMessage({ message }: ChatMessageProps) {
  const formattedTime = useMemo(() => 
    formatTimestamp(message.timestamp), 
    [message.timestamp]
  );

  return (
    <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
        <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          message.type === 'assistant' ? 'bg-blue-100' : 'bg-gray-100'
        }`}>
          {message.type === 'assistant' ? (
            <Bot className="h-5 w-5 text-blue-600" />
          ) : (
            <User className="h-5 w-5 text-gray-600" />
          )}
        </div>
        <div>
          <div className={`rounded-lg px-4 py-2 ${
            message.type === 'assistant' 
              ? 'bg-blue-50 text-gray-800' 
              : 'bg-blue-600 text-white'
          }`}>
            <p className="text-sm">{message.content}</p>
          </div>
          <p className="text-xs text-gray-500 mt-1 px-4">{formattedTime}</p>
        </div>
      </div>
    </div>
  );
}