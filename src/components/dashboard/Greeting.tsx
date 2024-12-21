import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FileText, 
  ArrowRight, 
  Bot,
  Clock,
  Bell
} from 'lucide-react';

interface GreetingProps {
  userName: string;
  pendingTasks?: number;
}

const Greeting = ({ userName, pendingTasks = 0 }: GreetingProps) => {
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
  };

  return (
    <div className="space-y-6">
      {/* Greeting Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Good {getTimeOfDay()}, {userName}!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your government services today.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Bot className="h-4 w-4" />
            Ask AI Assistant
          </Button>
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
            New Application
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Quick Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pending Tasks */}
        <Card className="bg-blue-50 border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Pending Tasks</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">
                  {pendingTasks}
                </p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <Button 
                variant="outline" 
                className="w-full border-blue-200 hover:bg-blue-100 text-blue-600"
              >
                View Tasks
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Documents */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Recent Documents</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">12</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <FileText className="h-5 w-5 text-gray-600" />
              </div>
            </div>
            <div className="mt-4">
              <Button 
                variant="outline" 
                className="w-full"
              >
                View Documents
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New Notifications</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">3</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <Bell className="h-5 w-5 text-gray-600" />
              </div>
            </div>
            <div className="mt-4">
              <Button 
                variant="outline" 
                className="w-full"
              >
                View Notifications
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Greeting;