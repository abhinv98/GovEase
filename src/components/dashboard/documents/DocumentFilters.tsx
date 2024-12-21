// src/components/dashboard/documents/DocumentFilters.tsx

import React from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardHeader, CardTitle } from '@/components/ui/card';

export default function DocumentFilters() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <CardHeader>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <CardTitle className="text-lg font-semibold">Your Documents</CardTitle>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search documents..."
              className="pl-9 pr-4 py-2 border rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </CardHeader>
  );
}