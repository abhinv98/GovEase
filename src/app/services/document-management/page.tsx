import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  Shield,
  Lock,
  Search,
  Share2,
  Clock,
  ArrowRight,
  CheckCircle2,
  Upload,
  Download
} from 'lucide-react';

export default function DocumentManagementPage() {
  const features = [
    {
      icon: Upload,
      title: "Easy Upload",
      description: "Drag and drop or click to upload multiple documents at once"
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Find any document instantly with our AI-powered search"
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "Bank-grade encryption for all your sensitive documents"
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share documents securely with government departments"
    }
  ];

  const benefits = [
    "Automatic document organization",
    "Version control and history",
    "OCR for searchable PDFs",
    "Automatic expiry notifications",
    "Multi-device access",
    "Compliance with e-Gov standards"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-blue-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge 
              variant="secondary" 
              className="bg-blue-50 text-blue-600 border-0 px-4 py-1"
            >
              Smart Document Management
            </Badge>

            <h1 className="text-5xl font-bold tracking-tight">
              Manage Your Documents
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Securely & Efficiently</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Store, organize, and access all your important government documents in one secure platform. Never worry about losing important papers again.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 gap-2"
              >
                Start Managing Documents
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="gap-2"
              >
                View Demo
                <FileText className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">
                Everything You Need for
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Document Management</span>
              </h2>
              
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="bg-blue-600 hover:bg-blue-700 gap-2"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl transform rotate-3" />
              <img
                src="/api/placeholder/600/400"
                alt="Document Management Interface"
                className="relative rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-12">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                <p className="text-blue-100">
                  Join thousands of citizens who have already simplified their document management with GovEase.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 gap-2"
                  >
                    Start Free Trial
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-black border-white hover:bg-blue-700 hover:text-white gap-2"
                  >
                    Contact Sales
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