// src/components/dashboard/documents/DocumentList.tsx

import React from 'react';
import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Eye, MoreVertical } from 'lucide-react';

// Helper function for consistent date formatting
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// ... rest of your imports

const documents = [
  {
    id: 1,
    name: 'Aadhaar Card.pdf',
    type: 'Identity Proof',
    source: 'DigiLocker',
    size: '2.4 MB',
    uploadedAt: '2024-01-15', // Use consistent date format YYYY-MM-DD
    status: 'verified',
    expires: '2030-01-15'
  },
  // ... more documents
];

export default function DocumentList() {
  return (
    <CardContent>
      <div className="rounded-lg border">
        {/* Table Header */}
        <div className="grid grid-cols-8 gap-4 p-4 bg-gray-50 rounded-t-lg border-b text-sm font-medium text-gray-500">
          <div className="col-span-3">Document</div>
          <div className="col-span-1">Type</div>
          <div className="col-span-1">Source</div>
          <div className="col-span-1">Size</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1">Actions</div>
        </div>

        {/* Document Rows */}
        {documents.map((doc) => (
          <div 
            key={doc.id} 
            className="grid grid-cols-8 gap-4 p-4 border-b last:border-0 items-center hover:bg-gray-50 transition-colors"
          >
            <div className="col-span-3 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{doc.name}</p>
                <p className="text-sm text-gray-500">
                  Uploaded on {formatDate(doc.uploadedAt)}
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <span className="text-sm text-gray-600">{doc.type}</span>
            </div>
            <div className="col-span-1">
              <Badge 
                variant="secondary"
                className={doc.source === 'DigiLocker' ? 'bg-purple-50 text-purple-700' : ''}
              >
                {doc.source}
              </Badge>
            </div>
            <div className="col-span-1">
              <span className="text-sm text-gray-600">{doc.size}</span>
            </div>
            <div className="col-span-1">
              <Badge 
                variant="secondary"
                className={
                  doc.status === 'verified' 
                    ? 'bg-green-50 text-green-700' 
                    : 'bg-orange-50 text-orange-700'
                }
              >
                {doc.status}
              </Badge>
            </div>
            <div className="col-span-1">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4 text-gray-500" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  );
}