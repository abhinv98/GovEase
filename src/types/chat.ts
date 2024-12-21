// src/types/chat.ts

import { LucideIcon } from 'lucide-react';

export interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface QuickAction {
  icon: LucideIcon;
  title: string;
  description: string;
  query: string;
}