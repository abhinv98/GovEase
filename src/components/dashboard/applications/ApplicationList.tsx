// src/components/dashboard/applications/ApplicationList.tsx

import React from 'react';
import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Eye, 
  MoreVertical, 
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const applications = [
  {
    id: 1,
    title: 'Passport Renewal',
    applicationId: 'APP-2024-001',
    department: 'Passport Office',
    submittedDate: '2024-01-15',
    status: 'in-progress',
    progress: 60,
    dueDate: '2024-02-15',
    priority: 'high'
  },
  {
    id: 2,
    title: 'Income Certificate',
    applicationId: 'APP-2024-002',
    department: 'Revenue Department',
    submittedDate: '2024-01-10',
    status: 'completed',
    progress: 100,
    dueDate: '2024-01-25',
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Business License',
    applicationId: 'APP-2024-003',
    department: 'Municipal Corporation',
    submittedDate: '2024-01-05',
    status: 'pending',
    progress: 30,
    dueDate: '2024-02-05',
    priority: 'low'
  }
];

const getStatusDetails = (status: string) => {
  switch (status) {
    case 'completed':
      return {
        icon: CheckCircle2,
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        badge: 'bg-green-100 text-green-700'
      };
    case 'in-progress':
      return {
        icon: Clock,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        badge: 'bg-blue-100 text-blue-700'
      };
    case 'pending':
      return {
        icon: AlertCircle,
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        badge: 'bg-orange-100 text-orange-700'
      };
    default:
      return {
        icon: FileText,
        color: 'text-gray-600',
        bgColor: 'bg-gray-50',
        badge: 'bg-gray-100 text-gray-700'
      };
  }
};

export default function ApplicationList() {
  return (
    <CardContent>
      <div className="space-y-4">
        {applications.map((application) => {
          const statusDetails = getStatusDetails(application.status);
          const StatusIcon = statusDetails.icon;

          return (
            <div
              key={application.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${statusDetails.bgColor}`}>
                      <StatusIcon className={`h-5 w-5 ${statusDetails.color}`} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {application.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {application.applicationId} • {application.department}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className={statusDetails.badge}
                  >
                    {application.status.replace('-', ' ').toUpperCase()}
                  </Badge>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{application.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-500"
                      style={{ width: `${application.progress}%` }}
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Submitted: {new Date(application.submittedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                    <span>Due: {new Date(application.dueDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Eye className="h-4 w-4" />
                      Track
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </CardContent>
  );
}