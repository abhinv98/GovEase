import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Bell, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Info,
  FileText,
  Calendar,
  ArrowRight
} from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: 'Application Update',
      message: 'Your income certificate application has been approved',
      timestamp: '2 hours ago',
      type: 'success',
      icon: CheckCircle2,
      action: 'View Details'
    },
    {
      id: 2,
      title: 'Document Expiring',
      message: 'Your driving license will expire in 30 days',
      timestamp: '1 day ago',
      type: 'warning',
      icon: AlertCircle,
      action: 'Renew Now'
    },
    {
      id: 3,
      title: 'New Service Available',
      message: 'Online property tax payment is now available',
      timestamp: '2 days ago',
      type: 'info',
      icon: Info,
      action: 'Learn More'
    },
    {
      id: 4,
      title: 'Appointment Reminder',
      message: 'Your passport verification appointment is tomorrow',
      timestamp: '3 days ago',
      type: 'reminder',
      icon: Calendar,
      action: 'View Details'
    }
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-50',
          text: 'text-green-700',
          icon: 'text-green-500'
        };
      case 'warning':
        return {
          bg: 'bg-orange-50',
          text: 'text-orange-700',
          icon: 'text-orange-500'
        };
      case 'info':
        return {
          bg: 'bg-blue-50',
          text: 'text-blue-700',
          icon: 'text-blue-500'
        };
      case 'reminder':
        return {
          bg: 'bg-purple-50',
          text: 'text-purple-700',
          icon: 'text-purple-500'
        };
      default:
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-700',
          icon: 'text-gray-500'
        };
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Bell className="h-5 w-5 text-blue-600" />
          Notifications
        </CardTitle>
        <Button variant="outline" size="sm" className="text-sm">
          Mark all as read
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {notifications.map((notification) => {
          const styles = getTypeStyles(notification.type);
          
          return (
            <div
              key={notification.id}
              className={`${styles.bg} p-4 rounded-lg space-y-3 hover:ring-1 hover:ring-gray-200 transition-shadow`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <notification.icon className={`h-5 w-5 ${styles.icon}`} />
                  </div>
                  <div>
                    <h3 className={`font-medium ${styles.text}`}>
                      {notification.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {notification.message}
                    </p>
                  </div>
                </div>
                <Badge 
                  variant="secondary"
                  className="shrink-0 text-xs"
                >
                  {notification.timestamp}
                </Badge>
              </div>
              <div className="flex items-center justify-between pt-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`text-sm ${styles.text} hover:${styles.bg}`}
                >
                  {notification.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Dismiss
                </Button>
              </div>
            </div>
          );
        })}

        <Button 
          variant="outline" 
          className="w-full mt-4 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
        >
          View All Notifications
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Notifications;