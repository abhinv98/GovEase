// src/app/dashboard/applications/page.tsx

"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, FileText } from 'lucide-react';
import ApplicationList from '@/components/dashboard/applications/ApplicationList';
import ApplicationFilters from '@/components/dashboard/applications/ApplicationFilters';
import ApplicationTimeline from '@/components/dashboard/applications/ApplicationTimeline';

const quickStats = [
  { 
    title: 'Total Applications', 
    value: '12', 
    label: 'All time applications',
    trend: '+2 this month' 
  },
  { 
    title: 'In Progress', 
    value: '5', 
    label: 'Currently processing',
    trend: '3 pending review' 
  },
  { 
    title: 'Completed', 
    value: '7', 
    label: 'Successfully processed',
    trend: '2 this week' 
  },
  { 
    title: 'Due Soon', 
    value: '3', 
    label: 'Requires attention',
    trend: 'Next 7 days' 
  }
];

export default function ApplicationsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Applications</h1>
          <p className="text-gray-500">Track and manage your government service applications.</p>
        </div>
        <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          New Application
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
                <Badge variant="secondary" className="bg-blue-50 text-blue-600">
                  {stat.trend}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Applications List Section */}
        <div className="lg:col-span-2">
          <Card>
            <ApplicationFilters />
            <ApplicationList />
          </Card>
        </div>

        {/* Timeline Section */}
        <div className="lg:col-span-1">
          <ApplicationTimeline />
        </div>
      </div>
    </div>
  );
}