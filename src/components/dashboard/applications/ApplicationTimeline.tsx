// src/components/dashboard/applications/ApplicationTimeline.tsx

"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Calendar,
  Upload,
  CreditCard,
  Bell
} from 'lucide-react';

// Move the data outside the component to avoid regeneration
const timeline = [
  {
    id: 1,
    type: 'status_update',
    title: 'Application Reviewed',
    description: 'Your passport renewal application has been reviewed',
    timestamp: '2 hours ago',
    status: 'success',
    icon: CheckCircle2
  },
  {
    id: 2,
    type: 'document_request',
    title: 'Document Required',
    description: 'Please upload your proof of address',
    timestamp: '1 day ago',
    status: 'pending',
    icon: Upload
  },
  {
    id: 3,
    type: 'payment',
    title: 'Payment Confirmed',
    description: 'Application fee payment received: ₹1,500',
    timestamp: '2 days ago',
    status: 'success',
    icon: CreditCard
  },
  {
    id: 4,
    type: 'appointment',
    title: 'Appointment Scheduled',
    description: 'Verification appointment set for Jan 20, 2024',
    timestamp: '3 days ago',
    status: 'upcoming',
    icon: Calendar
  },
  {
    id: 5,
    type: 'submission',
    title: 'Application Submitted',
    description: 'Initial application submitted successfully',
    timestamp: '3 days ago',
    status: 'success',
    icon: FileText
  }
];

// Moved status styles outside component
const getStatusStyles = (status: string) => {
  switch (status) {
    case 'success':
      return {
        icon: 'text-green-600',
        bg: 'bg-green-50',
        badge: 'bg-green-50 text-green-700'
      };
    case 'pending':
      return {
        icon: 'text-orange-600',
        bg: 'bg-orange-50',
        badge: 'bg-orange-50 text-orange-700'
      };
    case 'upcoming':
      return {
        icon: 'text-blue-600',
        bg: 'bg-blue-50',
        badge: 'bg-blue-50 text-blue-700'
      };
    default:
      return {
        icon: 'text-gray-600',
        bg: 'bg-gray-50',
        badge: 'bg-gray-50 text-gray-700'
      };
  }
};

export default function ApplicationTimeline() {
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Bell className="h-5 w-5 text-blue-600" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {timeline.map((item, index) => {
            const styles = getStatusStyles(item.status);
            const Icon = item.icon;
            
            return (
              <div key={item.id} className="flex gap-4">
                <div 
                  className="relative mt-1 flex h-6 w-6 flex-none items-center justify-center"
                >
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-1/2 top-6 h-full w-px -translate-x-1/2 bg-gray-200" />
                  )}
                  <div className={`h-6 w-6 rounded-full flex items-center justify-center ${styles.bg}`}>
                    <Icon className={`h-4 w-4 ${styles.icon}`} />
                  </div>
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <Badge 
                      variant="secondary"
                      className={styles.badge}
                    >
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500">{item.timestamp}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button 
          type="button"
          className="mt-6 text-sm text-blue-600 hover:text-blue-700 font-medium w-full text-center"
        >
          View All Activity
        </button>
      </CardContent>
    </Card>
  );
}