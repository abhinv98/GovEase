// src/components/dashboard/applications/ApplicationFilters.tsx

import React from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ApplicationFilters() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState('all');

  const filters = [
    { label: 'All', value: 'all', count: 12 },
    { label: 'In Progress', value: 'in-progress', count: 5 },
    { label: 'Pending Review', value: 'pending', count: 3 },
    { label: 'Completed', value: 'completed', count: 4 }
  ];

  return (
    <CardHeader className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <CardTitle className="text-lg font-semibold">Your Applications</CardTitle>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search applications..."
            className="pl-9 pr-4 py-2 border rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.value}
            variant={activeFilter === filter.value ? "default" : "outline"}
            className={activeFilter === filter.value ? "bg-blue-600" : ""}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
            <Badge 
              variant="secondary" 
              className={`ml-2 ${
                activeFilter === filter.value 
                  ? "bg-blue-500 text-white" 
                  : "bg-gray-100"
              }`}
            >
              {filter.count}
            </Badge>
          </Button>
        ))}
      </div>
    </CardHeader>
  );
}