import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  Upload,
  Search,
  CheckCircle2,
  ArrowRight,
  Bot,
  Clock,
  Shield,
  Smartphone,
  Bell,
  FileText,
  Users,
  Mail
} from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    title: "Create Your Account",
    description: "Sign up using your mobile number or email. Verify your identity with Aadhaar for a secure account.",
    features: [
      "Quick mobile verification",
      "Aadhaar-based KYC",
      "Secure profile creation"
    ]
  },
  {
    icon: Upload,
    title: "Connect Documents",
    description: "Link your DigiLocker account to access all your government documents instantly.",
    features: [
      "DigiLocker integration",
      "Automatic document fetch",
      "Secure storage"
    ]
  },
  {
    icon: Bot,
    title: "Get AI Assistance",
    description: "Our AI assistant guides you through various government procedures and helps with documentation.",
    features: [
      "24/7 AI support",
      "Multi-language assistance",
      "Smart recommendations"
    ]
  },
  {
    icon: Bell,
    title: "Track Progress",
    description: "Monitor your applications in real-time and receive updates at every step.",
    features: [
      "Real-time notifications",
      "Status tracking",
      "Deadline reminders"
    ]
  }
];

const features = [
  {
    title: "Smart Document Processing",
    description: "AI-powered system automatically validates and processes your documents",
    icon: FileText
  },
  {
    title: "24/7 Support",
    description: "Get assistance anytime through our AI chatbot or support team",
    icon: Users
  },
  {
    title: "Secure Platform",
    description: "Enterprise-grade security for all your sensitive information",
    icon: Shield
  },
  {
    title: "Instant Updates",
    description: "Real-time notifications about your application status",
    icon: Bell
  }
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-white to-orange-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge 
              variant="secondary" 
              className="bg-orange-50 text-orange-600 border-0 px-4 py-1"
            >
              Simple Process
            </Badge>

            <h1 className="text-5xl font-bold tracking-tight">
              Government Services
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent"> Made Easy</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Experience a seamless journey through government services with our 
              intuitive platform. Here's how GovEase simplifies everything for you.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 gap-2"
              >
                Get Started Now
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="gap-2"
              >
                Watch Demo
                <Sparkles className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className="space-y-8">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-orange-100">
                    <step.icon className="h-8 w-8 text-orange-600" />
                  </div>

                  <div className="space-y-4">
                    <Badge variant="secondary" className="bg-orange-50 text-orange-600">
                      Step {index + 1}
                    </Badge>
                    
                    <h2 className="text-3xl font-bold">{step.title}</h2>
                    
                    <p className="text-lg text-gray-600">
                      {step.description}
                    </p>

                    <ul className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl transform rotate-3" />
                  <Card className="relative p-6 border-0">
                    <img 
                      src={`/api/placeholder/600/400`}
                      alt={`Step ${index + 1} visualization`}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Powerful Features for a
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent"> Seamless Experience</span>
            </h2>
            <p className="text-gray-600">
              Everything you need to navigate government services efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-orange-50 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-orange-600 to-orange-500 text-white">
            <CardContent className="p-12">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                <p className="text-orange-100">
                  Join thousands of citizens who have simplified their government service experience with GovEase.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-orange-50 gap-2"
                  >
                    Create Free Account
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-orange-500 gap-2"
                  >
                    Contact Support
                    <Mail className="h-5 w-5" />
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