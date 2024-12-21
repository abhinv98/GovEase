import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Bot,
  Languages,
  Brain,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
  Download,
  Sparkles,
  Users,
  Settings,
  Shield
} from 'lucide-react';

export default function AIAssistantPage() {
  const features = [
    {
      icon: Languages,
      title: "Multi-lingual Support",
      description: "Get assistance in 10+ Indian languages including Hindi, Tamil, Telugu, and more"
    },
    {
      icon: Brain,
      title: "Smart Understanding",
      description: "Context-aware AI that understands your specific needs and requirements"
    },
    {
      icon: MessageSquare,
      title: "24/7 Availability",
      description: "Get instant responses and support any time of day or night"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your conversations are encrypted and completely private"
    }
  ];

  const capabilities = [
    {
      title: "Process Guidance",
      description: "Step-by-step assistance for any government service"
    },
    {
      title: "Document Verification",
      description: "Instant verification of required documents"
    },
    {
      title: "Status Tracking",
      description: "Real-time updates on your applications"
    },
    {
      title: "Smart Forms",
      description: "AI-powered form filling assistance"
    },
    {
      title: "Deadline Management",
      description: "Proactive reminders for important dates"
    },
    {
      title: "Query Resolution",
      description: "Instant answers to common questions"
    }
  ];

  const stats = [
    {
      value: "10+",
      label: "Languages",
      description: "Supported"
    },
    {
      value: "24/7",
      label: "Availability",
      description: "Always ready"
    },
    {
      value: "50k+",
      label: "Queries",
      description: "Resolved daily"
    },
    {
      value: "99.9%",
      label: "Accuracy",
      description: "In responses"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-white to-purple-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge 
              variant="secondary" 
              className="bg-purple-50 text-purple-600 border-0 px-4 py-1"
            >
              AI-Powered Assistance
            </Badge>

            <h1 className="text-5xl font-bold tracking-tight">
              Your 24/7 Personal
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"> Government Service Assistant</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Experience the future of government services with our AI assistant. Get instant help, 
              guidance, and support in your preferred language, any time of day.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 gap-2"
              >
                Try AI Assistant Now
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="gap-2"
              >
                Watch Demo
                <Bot className="h-5 w-5" />
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-1">
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <div className="space-y-0.5">
                    <p className="font-medium text-gray-800">{stat.label}</p>
                    <p className="text-sm text-gray-500">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Powerful Features for a
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"> Seamless Experience</span>
            </h2>
            <p className="text-gray-600">
              Our AI assistant combines cutting-edge technology with user-friendly design to make 
              government services accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-purple-50 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">
                Experience the Power of
                <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"> AI Assistance</span>
              </h2>
              
              <div className="grid gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 mt-1">
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{capability.title}</h3>
                      <p className="text-gray-600">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                className="bg-purple-600 hover:bg-purple-700 gap-2"
              >
                Start Using AI Assistant
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl transform -rotate-3" />
              <Card className="relative p-6 border-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Bot className="h-6 w-6 text-purple-600" />
                    <span className="font-medium">AI Assistant</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-lg p-4 text-gray-700">
                      Hello! How can I assist you with government services today?
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 text-gray-700">
                      I need help with passport renewal process
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-gray-700">
                      I'll guide you through the passport renewal process. First, let me check your eligibility. Could you confirm if this is a regular passport renewal?
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 text-gray-700">
                      Yes, it's a regular renewal
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-gray-700">
                      Great! Here's what you'll need:
                      1. Original old passport
                      2. Self-attested copies of first and last pages
                      3. Proof of address
                      Would you like me to help you schedule an appointment?
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <CardContent className="p-12">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold">Ready to Simplify Government Services?</h2>
                <p className="text-purple-100">
                  Join thousands of citizens who are already using AI to navigate government services efficiently.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-purple-50 gap-2"
                  >
                    Get Started Free
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-black border-white hover:bg-purple-700 hover:text-white gap-2"
                  >
                    Schedule Demo
                    <Download className="h-5 w-5" />
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