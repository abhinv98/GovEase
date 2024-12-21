// src/app/dashboard/documents/page.tsx

"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Plus } from 'lucide-react';
import DocumentList from '@/components/dashboard/documents/DocumentList';
import DocumentFilters from '@/components/dashboard/documents/DocumentFilters';
import DocumentUpload from '@/components/dashboard/documents/DocumentUpload';

const quickStats = [
  { title: 'Total Documents', value: '15', label: 'Across all categories' },
  { title: 'Verified Documents', value: '12', label: 'DigiLocker verified' },
  { title: 'Pending Verification', value: '3', label: 'Awaiting verification' },
  { title: 'Expiring Soon', value: '2', label: 'Within 30 days' }
];

export default function DocumentsPage() {
  const [isUploadOpen, setIsUploadOpen] = React.useState(false);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Documents</h1>
          <p className="text-gray-500">Manage your documents and certificates securely.</p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="gap-2"
          >
            <Shield className="h-4 w-4" />
            Sync DigiLocker
          </Button>
          <Button 
            className="gap-2 bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsUploadOpen(true)}
          >
            <Plus className="h-4 w-4" />
            Upload Document
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Documents Section */}
      <Card>
        <DocumentFilters />
        <DocumentList />
      </Card>

      {/* Upload Modal */}
      <DocumentUpload 
        isOpen={isUploadOpen} 
        onClose={() => setIsUploadOpen(false)} 
      />
    </div>
  );
}