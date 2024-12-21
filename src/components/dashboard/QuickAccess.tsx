import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '../ui/badge';
import { 
  FileText, 
  Bot, 
  Link as LinkIcon, 
  Clock, 
  ArrowRight,
  Shield,
  Download,
  Upload
} from 'lucide-react';

const QuickAccess = () => {
  const services = [
    {
      title: 'Document Management',
      icon: FileText,
      description: 'Upload and manage your documents',
      href: '/dashboard/documents',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      title: 'AI Assistant',
      icon: Bot,
      description: 'Get instant help with services',
      href: '/dashboard/ai-assistant',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      title: 'DigiLocker',
      icon: Shield,
      description: 'Access verified documents',
      href: '/dashboard/digilocker',
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      title: 'Track Applications',
      icon: Clock,
      description: 'Check status of applications',
      href: '/dashboard/applications',
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    }
  ];

  const recentActions = [
    {
      title: 'Income Certificate',
      type: 'Download',
      icon: Download,
      timestamp: '2 hours ago',
      status: 'Completed'
    },
    {
      title: 'Property Documents',
      type: 'Upload',
      icon: Upload,
      timestamp: '5 hours ago',
      status: 'Pending'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.href}
            className="group"
          >
            <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-blue-100">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className={`h-12 w-12 rounded-lg ${service.bg} flex items-center justify-center`}>
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 flex items-center justify-between">
                      {service.title}
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      {/* Recent Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Recent Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActions.map((action, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center">
                    <action.icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{action.title}</p>
                    <p className="text-sm text-gray-600">{action.type} • {action.timestamp}</p>
                  </div>
                </div>
                <Badge
                  variant={action.status === 'Completed' ? 'default' : 'secondary'}
                  className={`${
                    action.status === 'Completed' 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-orange-100 text-orange-700'
                  }`}
                >
                  {action.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickAccess;