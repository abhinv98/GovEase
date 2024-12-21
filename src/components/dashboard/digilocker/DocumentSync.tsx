// src/components/dashboard/digilocker/DocumentSync.tsx

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  RefreshCw,
  Clock,
  CheckCircle2,
  FileText
} from 'lucide-react';

const syncHistory = [
  {
    id: 1,
    event: 'Documents Synced',
    timestamp: '2 hours ago',
    status: 'success',
    details: '8 documents updated'
  },
  {
    id: 2,
    event: 'New Document Available',
    timestamp: '1 day ago',
    status: 'info',
    details: 'Income Certificate'
  },
  {
    id: 3,
    event: 'Sync Attempted',
    timestamp: '2 days ago',
    status: 'pending',
    details: 'Retry required'
  }
];

export default function DocumentSync() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Sync Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Current Status */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Auto-Sync</span>
              </div>
              <Badge variant="secondary" className="bg-green-50 text-green-700">
                Enabled
              </Badge>
            </div>
            <p className="text-sm text-gray-600">
              Documents are automatically synced every 24 hours
            </p>
          </div>

          {/* Sync History */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Recent Activity</h4>
            {syncHistory.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className={`p-2 rounded-full ${
                  item.status === 'success' 
                    ? 'bg-green-50' 
                    : item.status === 'info'
                    ? 'bg-blue-50'
                    : 'bg-orange-50'
                }`}>
                  {item.status === 'success' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : item.status === 'info' ? (
                    <FileText className="h-4 w-4 text-blue-600" />
                  ) : (
                    <Clock className="h-4 w-4 text-orange-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{item.event}</p>
                  <p className="text-sm text-gray-500">{item.details}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
            <RefreshCw className="h-4 w-4" />
            Sync Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}