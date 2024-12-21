// src/components/dashboard/documents/DocumentUpload.tsx

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, X } from 'lucide-react';

interface DocumentUploadProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DocumentUpload({ isOpen, onClose }: DocumentUploadProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-lg mx-4">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">Upload Document</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Upload Area */}
            <div className="border-2 border-dashed rounded-lg p-8 text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                <Upload className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-900 font-medium">Drag and drop your files here</p>
                <p className="text-sm text-gray-500">or click to browse</p>
              </div>
              <input 
                type="file" 
                className="hidden" 
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
              <Button variant="outline" className="mt-4">
                Browse Files
              </Button>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Document Type
                </label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>Identity Proof</option>
                  <option>Address Proof</option>
                  <option>Certificate</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea 
                  className="w-full border rounded-lg px-3 py-2"
                  rows={3}
                  placeholder="Add a description for this document..."
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Upload Document
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}