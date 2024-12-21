// src/components/dashboard/ai-assistant/ChatInterface.tsx

"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import type { Message } from '@/types/chat';

const INITIAL_MESSAGE: Message = {
  id: 'initial',
  type: 'assistant',
  content: "Hello! I'm your GovEase AI assistant. How can I help you today?",
  timestamp: 0 // We'll set this after mounting
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messageIdCounter = useRef(0);

  useEffect(() => {
    // Set initial message after mounting
    setMessages([{
      ...INITIAL_MESSAGE,
      timestamp: Date.now()
    }]);
  }, []);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const newUserMessage: Message = {
      id: `user-${++messageIdCounter.current}`,
      type: 'user',
      content: content.trim(),
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: `ai-${++messageIdCounter.current}`,
        type: 'assistant',
        content: `I understand you're asking about "${content}". Let me help you with that...`,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="flex-1 flex flex-col">
      <MessageList messages={messages} isLoading={isLoading} />
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </Card>
  );
}