import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Target,
  Users,
  Heart,
  Shield,
  ArrowRight,
  CheckCircle2,
  Globe,
  Zap,
  LineChart,
  Trophy,
  Star
} from 'lucide-react';

const values = [
  {
    icon: Users,
    title: "Citizen-Centric",
    description: "Putting citizens first in every decision and feature we develop"
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Maintaining the highest standards of data protection and privacy"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Leveraging technology to simplify complex processes"
  },
  {
    icon: Heart,
    title: "Inclusivity",
    description: "Making government services accessible to every citizen"
  }
];

const impactStats = [
  {
    value: "1M+",
    label: "Citizens Served",
    description: "Across India"
  },
  {
    value: "50%",
    label: "Time Saved",
    description: "On average"
  },
  {
    value: "100K+",
    label: "Applications",
    description: "Processed monthly"
  },
  {
    value: "10+",
    label: "Languages",
    description: "Supported"
  }
];

const roadmap = [
  {
    year: "2024",
    title: "AI-Powered Assistance",
    description: "Launch of intelligent document processing and multi-lingual support"
  },
  {
    year: "2025",
    title: "Nationwide Integration",
    description: "Complete integration with all major government departments"
  },
  {
    year: "2026",
    title: "Global Expansion",
    description: "Adaptation of our platform for international markets"
  }
];

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-purple-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge 
              variant="secondary" 
              className="bg-blue-50 text-blue-600 border-0 px-4 py-1"
            >
              Our Mission
            </Badge>

            <h1 className="text-5xl font-bold tracking-tight">
              Simplifying Governance for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Every Citizen</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We're on a mission to transform how citizens interact with government services, 
              making them more accessible, efficient, and user-friendly through technology.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 gap-2"
              >
                Join Our Mission
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="gap-2"
              >
                View Impact Report
                <LineChart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Core
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Values</span>
            </h2>
            <p className="text-gray-600">
              The principles that guide our mission and shape our approach to transforming government services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Impact</span>
            </h2>
            <p className="text-gray-600">
              The real-world difference we're making in citizens' lives
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-2">
                  <p className="text-3xl font-bold text-blue-600">
                    {stat.value}
                  </p>
                  <p className="font-medium text-gray-900">{stat.label}</p>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Roadmap</span>
            </h2>
            <p className="text-gray-600">
              The journey ahead in our mission to transform government services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {roadmap.map((milestone, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 h-full w-px bg-blue-200">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-blue-600" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-50 text-blue-600">
                      {milestone.year}
                    </Badge>
                    <h3 className="font-semibold text-lg">
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-12">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold">Join Us in Our Mission</h2>
                <p className="text-blue-100">
                  Be part of the movement to transform government services in India.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 gap-2"
                  >
                    Get Started Free
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-blue-500 gap-2"
                  >
                    Learn More
                    <Trophy className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}