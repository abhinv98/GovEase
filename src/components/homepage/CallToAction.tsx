"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  CheckCircle2,
  Shield,
  Clock,
  Users,
  FileText,
  Bot
} from 'lucide-react';

const CTASection: React.FC = () => {
  const benefits = [
    {
      icon: Bot,
      text: "AI-powered assistance available 24/7"
    },
    {
      icon: FileText,
      text: "Easy document submissions with DigiLocker"
    },
    {
      icon: Clock,
      text: "Real-time tracking of application status"
    },
    {
      icon: Shield,
      text: "Enterprise-grade security for your data"
    }
  ];

  const stats = [
    {
      value: "50%",
      label: "Faster Processing",
      description: "Average time saved"
    },
    {
      value: "100k+",
      label: "Applications",
      description: "Successfully processed"
    },
    {
      value: "4.9★",
      label: "User Rating",
      description: "Based on 10k+ reviews"
    },
    {
      value: "24/7",
      label: "Support",
      description: "Always available"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative">
        <Card className="relative border-0 shadow-xl bg-white/80 backdrop-blur">
          <CardContent className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="space-y-8">
                <div className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-50 rounded-full">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-600">
                    Join 100,000+ Citizens
                  </span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tight">
                    Transform Your Government
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Services Experience</span>
                  </h2>

                  <p className="text-xl text-gray-600 leading-relaxed">
                    Join thousands of citizens who have simplified their interaction with government services. Start your seamless journey today.
                  </p>
                </div>

                {/* Benefits List */}
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li 
                      key={index} 
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-base">{benefit.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 gap-2 transition-colors"
                  >
                    Get Started Free
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors"
                  >
                    Watch Demo
                  </Button>
                </div>

                <p className="text-sm text-gray-500">
                  No credit card required • Free 14-day trial • Cancel anytime
                </p>
              </div>

              {/* Stats Side */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card 
                    key={index} 
                    className="bg-white border border-gray-100 hover:border-blue-100 transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center space-y-2">
                      <div className="text-3xl font-bold text-blue-600">
                        {stat.value}
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-gray-900">
                          {stat.label}
                        </p>
                        <p className="text-sm text-gray-500">
                          {stat.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-gray-600 mb-8">
            Trusted by Government Organizations Across India
          </p>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {[1, 2, 3, 4].map((index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur p-4 rounded-lg hover:shadow-md transition-all duration-300"
              >
                <img 
                  src={`/api/placeholder/120/40`} 
                  alt={`Government Badge ${index}`} 
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;