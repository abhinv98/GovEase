// src/app/dashboard/ai-assistant/page.tsx

"use client";

import React, { useState, useEffect } from 'react';
import ChatInterface from '@/components/dashboard/ai-assistant/ChatInterface';
import QuickActions from '@/components/dashboard/ai-assistant/QuickActions';

export default function AIAssistantPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show loading skeleton until client-side hydration is complete
  if (!isMounted) {
    return (
      <div className="flex h-[calc(100vh-10rem)] gap-6">
        <div className="flex-1 animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-96 bg-gray-200 rounded mb-6"></div>
          <div className="h-[calc(100vh-14rem)] bg-gray-200 rounded"></div>
        </div>
        <div className="hidden lg:block w-80">
          <div className="h-full bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-10rem)] gap-6">
      <div className="flex-1 flex flex-col">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">AI Assistant</h1>
          <p className="text-gray-500">Get instant help with your government services.</p>
        </div>
        <ChatInterface />
      </div>
      <div className="hidden lg:block">
        <QuickActions 
          onQuickAction={(query) => {
            console.log('Quick action:', query);
          }} 
        />
      </div>
    </div>
  );
}