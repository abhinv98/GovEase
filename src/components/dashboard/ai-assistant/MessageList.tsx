// src/components/dashboard/ai-assistant/MessageList.tsx

import React from 'react';
import { Bot, Loader2 } from 'lucide-react';
import ChatMessage from './ChatMessage';
import type { Message } from '@/types/chat';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export default function MessageList({ messages, isLoading }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      
      {isLoading && (
        <div className="flex justify-start">
          <div className="flex gap-3 max-w-[80%]">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Bot className="h-5 w-5 text-blue-600" />
            </div>
            <div className="rounded-lg px-4 py-2 bg-blue-50">
              <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}