// src/components/dashboard/digilocker/VerifiedDocuments.tsx

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  Download,
  Eye,
  MoreVertical,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const documents = [
  {
    id: 1,
    name: 'Aadhaar Card',
    issuer: 'UIDAI',
    issuedDate: '2024-01-15',
    status: 'verified',
    docType: 'Identity Proof'
  },
  {
    id: 2,
    name: 'PAN Card',
    issuer: 'Income Tax Department',
    issuedDate: '2024-01-10',
    status: 'verified',
    docType: 'Identity Proof'
  },
  {
    id: 3,
    name: 'Driving License',
    issuer: 'Transport Department',
    issuedDate: '2024-01-05',
    status: 'pending',
    docType: 'License'
  }
];

export default function VerifiedDocuments() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Verified Documents</CardTitle>
        <Button variant="outline" size="sm">
          Filter
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{doc.name}</h3>
                    {doc.status === 'verified' ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-orange-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    {doc.issuer} • {new Date(doc.issuedDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className={doc.status === 'verified' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}
                >
                  {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                </Badge>
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}