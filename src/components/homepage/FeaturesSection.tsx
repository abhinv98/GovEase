"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  Bot, 
  FileText, 
  Bell, 
  Lock, 
  Clock, 
  Users, 
  ChevronRight, 
  Zap,
  ShieldCheck,
  ServerCog,
  ArrowRight,
  LucideIcon,
  Phone,
  AlertCircle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  badge?: string;
  learnMoreLink: string;
}

const features: Feature[] = [
  {
    icon: Bot,
    title: 'AI-Powered Assistance',
    description: 'Get instant answers and guidance through complex government procedures with our intelligent AI assistant.',
    benefits: [
      'Natural language understanding',
      'Context-aware responses',
      'Multi-lingual support'
    ],
    badge: 'New',
    learnMoreLink: '/features/ai-assistant'
  },
  {
    icon: FileText,
    title: 'Smart Document Management',
    description: 'Securely store, organize, and access all your government documents with seamless DigiLocker integration.',
    benefits: [
      'Automated organization',
      'Quick document retrieval',
      'Version control'
    ],
    learnMoreLink: '/features/document-management'
  },
  {
    icon: Bell,
    title: 'Proactive Notifications',
    description: 'Stay informed with personalized reminders and updates about your applications and renewals.',
    benefits: [
      'Deadline tracking',
      'Status updates',
      'Custom alert preferences'
    ],
    learnMoreLink: '/features/notifications'
  },
  {
    icon: Lock,
    title: 'Enterprise-Grade Security',
    description: 'Your data is protected with state-of-the-art security measures and full compliance with government regulations.',
    benefits: [
      'End-to-end encryption',
      'Regular security audits',
      'Compliance certifications'
    ],
    badge: 'ISO 27001',
    learnMoreLink: '/features/security'
  },
  {
    icon: Clock,
    title: 'Time-Saving Automation',
    description: 'Automate repetitive tasks and form-filling with smart data extraction and pre-filled applications.',
    benefits: [
      'Smart form filling',
      'Data validation',
      'Bulk processing'
    ],
    learnMoreLink: '/features/automation'
  },
  {
    icon: Users,
    title: '24/7 Expert Support',
    description: 'Access our dedicated support team anytime for assistance with complex procedures or technical issues.',
    benefits: [
      'Live chat support',
      'Video consultations',
      'Priority handling'
    ],
    learnMoreLink: '/features/support'
  }
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature: { icon: Icon, title, description, benefits, badge, learnMoreLink } }) => (
  <Card className="group relative overflow-hidden border border-gray-100 bg-white hover:border-blue-100 hover:shadow-lg transition-all duration-300">
    <CardHeader className="relative z-10 p-8">
      {/* Top Section with Icon and Badge */}
      <div className="flex justify-between items-start mb-6">
        <div className="relative">
          <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center transition-colors duration-200 group-hover:bg-blue-100">
            <Icon className="h-7 w-7 text-blue-600" />
          </div>
        </div>

        {badge && (
          <Badge 
            variant="secondary"
            className="bg-blue-50 text-blue-600 border-0 px-3 py-1 text-xs font-semibold"
          >
            {badge}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4">
        <CardTitle className="text-2xl font-bold text-gray-900">
          {title}
        </CardTitle>
        
        <CardDescription className="text-base text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
        
        {/* Benefits List */}
        <ul className="space-y-3 py-4">
          {benefits.map((benefit, index) => (
            <li 
              key={index} 
              className="flex items-center gap-3 text-gray-700"
            >
              <div className="h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Learn More Link with enhanced interaction */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <a 
          href={learnMoreLink}
          className="inline-flex items-center text-blue-600 font-medium group/link hover:text-blue-700 transition-all duration-200"
        >
          <span className="mr-2">Learn More</span>
          <ArrowRight className="h-4 w-4 transform translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200 ease-out" />
        </a>
      </div>
    </CardHeader>
  </Card>
);

const StatsCard: React.FC<{
  icon: LucideIcon;
  stat: string;
  label: string;
  sublabel: string;
}> = ({ icon: Icon, stat, label, sublabel }) => (
  <Card className="border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300">
    <CardHeader className="flex flex-row items-center gap-5 p-6">
      <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center transition-colors duration-200">
        <Icon className="h-7 w-7 text-blue-600" />
      </div>
      <div>
        <CardTitle className="text-2xl font-bold text-blue-600">
          {stat}
        </CardTitle>
        <div className="space-y-1">
          <p className="font-medium text-gray-900">{label}</p>
          <p className="text-sm text-gray-500">{sublabel}</p>
        </div>
      </div>
    </CardHeader>
  </Card>
);

const FeaturesSection: React.FC = () => {
  const stats = [
    {
      icon: ServerCog,
      stat: '99.9%',
      label: 'Platform Uptime',
      sublabel: 'Enterprise reliability'
    },
    {
      icon: ShieldCheck,
      stat: '256-bit',
      label: 'Data Encryption',
      sublabel: 'Bank-grade security'
    },
    {
      icon: Users,
      stat: '24/7',
      label: 'Expert Support',
      sublabel: 'Always available'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20 space-y-6">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-50 rounded-full">
            <Zap className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-600">
              Powerful Features
            </span>
          </div>

          <h2 className="text-4xl font-bold">
            Simplifying Government Services with
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Advanced Technology</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
            Experience a new way of managing government services with our comprehensive suite of features designed to save time and reduce complexity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              {...stat}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;