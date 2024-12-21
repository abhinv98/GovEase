// src/app/dashboard/digilocker/page.tsx

"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Shield,
  Link as LinkIcon,
  FileText,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import VerifiedDocuments from '@/components/dashboard/digilocker/VerifiedDocuments';
import ConnectionStatus from '@/components/dashboard/digilocker/ConnectionStatus';
import DocumentSync from '@/components/dashboard/digilocker/DocumentSync';

const quickStats = [
  {
    title: 'Verified Documents',
    value: '8',
    description: 'DigiLocker verified',
    icon: CheckCircle2,
    color: 'text-green-600',
    bg: 'bg-green-50'
  },
  {
    title: 'Pending Verification',
    value: '3',
    description: 'Awaiting verification',
    icon: Clock,
    color: 'text-orange-600',
    bg: 'bg-orange-50'
  },
  {
    title: 'Last Synced',
    value: '2h ago',
    description: 'Auto-sync enabled',
    icon: RefreshCw,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    title: 'Available Documents',
    value: '15+',
    description: 'Ready to fetch',
    icon: FileText,
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  }
];

export default function DigiLockerPage() {
  const [isConnected] = useState(false);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">DigiLocker Integration</h1>
          <p className="text-gray-500">Access and manage your verified government documents.</p>
        </div>
        <Button 
          className={`gap-2 ${
            isConnected 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isConnected ? (
            <>
              <Shield className="h-4 w-4" />
              Sync Documents
            </>
          ) : (
            <>
              <LinkIcon className="h-4 w-4" />
              Connect DigiLocker
            </>
          )}
        </Button>
      </div>

      {/* Connection Status */}
      <ConnectionStatus isConnected={isConnected} />

      {/* Quick Stats */}
      {isConnected && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.description}</p>
                  </div>
                  <div className={`p-2 rounded-lg ${stat.bg}`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Verified Documents Section */}
        <div className="md:col-span-2">
          <VerifiedDocuments />
        </div>

        {/* Document Sync Section */}
        <div className="md:col-span-1">
          <DocumentSync />
        </div>
      </div>
    </div>
  );
}