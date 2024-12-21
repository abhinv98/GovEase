// src/components/dashboard/ai-assistant/QuickActions.tsx

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  FileText, 
  Calendar, 
  Clock,
  ChevronRight,
  RefreshCw
} from 'lucide-react';
import type { QuickAction } from '@/types/chat';

const quickActions: QuickAction[] = [
  {
    icon: FileText,
    title: "Document Help",
    description: "Get help with document requirements",
    query: "What documents do I need for passport renewal?"
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description: "Schedule appointments easily",
    query: "How can I book an appointment for passport verification?"
  },
  {
    icon: Clock,
    title: "Application Status",
    description: "Track your applications",
    query: "Check the status of my recent applications"
  }
];

interface QuickActionsProps {
  onQuickAction: (query: string) => void;
}

export default function QuickActions({ onQuickAction }: QuickActionsProps) {
  return (
    <div className="w-80 space-y-6">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Quick Actions</h2>
      </div>
      
      <div className="space-y-3">
        {quickActions.map((action, index) => (
          <button
            key={index}
            className="w-full p-4 rounded-lg border bg-white hover:border-blue-200 hover:shadow-sm transition-all text-left group"
            onClick={() => onQuickAction(action.query)}
          >
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <action.icon className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{action.title}</h3>
                <p className="text-sm text-gray-500">{action.description}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium">Chat History</p>
                <p className="text-xs text-gray-500">Last 30 days</p>
              </div>
            </div>
            <Badge variant="secondary">15 chats</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}