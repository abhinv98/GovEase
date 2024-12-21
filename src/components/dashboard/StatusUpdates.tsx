import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Calendar,
  ArrowRight,
  MoreVertical,
  Eye
} from 'lucide-react';

const StatusUpdates = () => {
  const applications = [
    {
      id: 1,
      title: 'Income Certificate',
      department: 'Revenue Department',
      status: 'approved',
      progress: 100,
      lastUpdate: '2 hours ago',
      dueDate: '15 Jan 2025',
      applicationId: 'APP-2024-001'
    },
    {
      id: 2,
      title: 'Property Registration',
      department: 'Land Records',
      status: 'in-progress',
      progress: 60,
      lastUpdate: '1 day ago',
      dueDate: '20 Jan 2025',
      applicationId: 'APP-2024-002'
    },
    {
      id: 3,
      title: 'Business License',
      department: 'Municipal Corporation',
      status: 'pending',
      progress: 30,
      lastUpdate: '3 days ago',
      dueDate: '25 Jan 2025',
      applicationId: 'APP-2024-003'
    }
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'approved':
        return {
          bg: 'bg-green-50',
          text: 'text-green-700',
          badge: 'bg-green-100',
          icon: CheckCircle2,
          iconColor: 'text-green-500'
        };
      case 'in-progress':
        return {
          bg: 'bg-blue-50',
          text: 'text-blue-700',
          badge: 'bg-blue-100',
          icon: Clock,
          iconColor: 'text-blue-500'
        };
      case 'pending':
        return {
          bg: 'bg-orange-50',
          text: 'text-orange-700',
          badge: 'bg-orange-100',
          icon: AlertCircle,
          iconColor: 'text-orange-500'
        };
      default:
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-700',
          badge: 'bg-gray-100',
          icon: FileText,
          iconColor: 'text-gray-500'
        };
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <FileText className="h-5 w-5 text-blue-600" />
          Recent Applications
        </CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {applications.map((application) => {
          const styles = getStatusStyles(application.status);
          const StatusIcon = styles.icon;
          
          return (
            <div
              key={application.id}
              className="p-4 rounded-lg border hover:shadow-md transition-shadow space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                {/* Application Info */}
                <div className="flex items-start gap-3 flex-grow">
                  <div className={`h-10 w-10 rounded-lg ${styles.bg} flex items-center justify-center flex-shrink-0`}>
                    <StatusIcon className={`h-5 w-5 ${styles.iconColor}`} />
                  </div>
                  <div className="space-y-1 flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">
                        {application.title}
                      </h3>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">
                      {application.department}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-500">
                        ID: {application.applicationId}
                      </span>
                      <Badge 
                        variant="secondary"
                        className={`${styles.badge} ${styles.text} capitalize`}
                      >
                        {application.status.replace('-', ' ')}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
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

              {/* Timeline and Actions */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Updated {application.lastUpdate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Due {application.dueDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 gap-1"
                  >
                    <Eye className="h-4 w-4" />
                    Track
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="gap-1"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        <Button 
          variant="outline" 
          className="w-full mt-4 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
        >
          View All Applications
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default StatusUpdates;