"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  CheckCircle2, 
  Play,
  Users,
  Star,
  ExternalLink 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  const features = [
    {
      icon: Shield,
      text: 'Government Verified Platform',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      text: 'Average 50% Time Savings',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      text: 'Used by 1M+ Citizens',
      color: 'text-purple-600'
    }
  ];

  const stats = [
    { 
      value: '1M+', 
      label: 'Citizens Served',
      detail: 'Across India' 
    },
    { 
      value: '50+', 
      label: 'Services Available',
      detail: 'And Growing' 
    },
    { 
      value: '4.9/5', 
      label: 'User Rating',
      detail: 'Based on 50k+ reviews' 
    }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-50 via-white to-orange-50" />
      
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/50 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Features Bar */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  <span className="text-sm font-medium text-gray-800">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
            
            {/* New Badge */}
            <Badge 
              variant="outline" 
              className="mx-auto lg:mx-0 bg-blue-50 text-blue-600 border-blue-200 px-4 py-1"
            >
              Now in 10+ Indian Languages 🎉
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-gray-900">Making Government Services </span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text inline-block">
                Simple & Fast
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Navigate government processes effortlessly with AI-powered assistance, 
              secure document management, and real-time tracking - all in one platform.
            </p>
            
            {/* Feature List */}
            <ul className="space-y-4">
              {[
                'AI-powered document processing & verification',
                'Secure DigiLocker integration for safe storage',
                'Real-time application tracking & updates'
              ].map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 text-gray-700 justify-center lg:justify-start"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 gap-2"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors duration-200 gap-2"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left space-y-1">
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                    {stat.value}
                  </p>
                  <div className="space-y-0.5">
                    <p className="font-medium text-gray-800">{stat.label}</p>
                    <p className="text-sm text-gray-500">{stat.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-4">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                Rated 4.9/5 on
              </span>
              <span className="font-medium text-gray-900">
                ProductHunt
              </span>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="relative lg:h-[36rem] flex items-center justify-center">
            <div className="w-full h-full relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl transform rotate-3 transition-transform duration-500 hover:rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl transform -rotate-3 transition-transform duration-500 hover:-rotate-6" />
              
              {/* Main Content Container */}
              <div className="relative rounded-2xl bg-white/80 backdrop-blur p-8 h-full flex items-center justify-center shadow-xl">
                {/* Main Platform Image */}
                <img 
                  src="/api/placeholder/600/400"
                  alt="GovEase Platform Interface"
                  className="rounded-lg shadow-lg w-full h-auto max-w-[600px] object-cover"
                />

                {/* Floating Stats Cards */}
                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                  <p className="text-sm font-medium text-gray-600">Processing Time</p>
                  <p className="text-2xl font-bold text-blue-600">2x Faster</p>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                  <p className="text-sm font-medium text-gray-600">Security Level</p>
                  <p className="text-2xl font-bold text-green-600">Enterprise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;