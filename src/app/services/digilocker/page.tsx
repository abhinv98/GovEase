import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  Shield,
  Lock,
  Share2,
  ArrowRight,
  CheckCircle2,
  Download,
  Upload,
  Link,
  Fingerprint,
  Smartphone,
  Clock,
  CloudLightning,
  Check
} from 'lucide-react';

export default function DigiLockerIntegrationPage() {
  const features = [
    {
      icon: Lock,
      title: "Secure Integration",
      description: "Direct and secure connection with your DigiLocker account using OAuth 2.0"
    },
    {
      icon: CloudLightning,
      title: "Instant Access",
      description: "Access your documents instantly across all your devices"
    },
    {
      icon: Fingerprint,
      title: "Verified Documents",
      description: "Government-verified digital documents with legal validity"
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share documents securely with government departments"
    }
  ];

  const benefits = [
    {
      title: "Official Documents",
      description: "Access all your government-issued documents in one place"
    },
    {
      title: "Paperless Process",
      description: "Reduce paper usage with digital verification and processing"
    },
    {
      title: "Quick Retrieval",
      description: "Find and share documents in seconds with smart search"
    },
    {
      title: "Auto-Sync",
      description: "New documents are automatically synced to your account"
    },
    {
      title: "Secure Storage",
      description: "Bank-grade encryption for your sensitive data"
    },
    {
      title: "24/7 Access",
      description: "Access your documents anytime, anywhere on any device"
    }
  ];

  const supportedDocs = [
    {
      name: "Aadhaar Card",
      status: "Available instantly"
    },
    {
      name: "PAN Card",
      status: "Available instantly"
    },
    {
      name: "Driving License",
      status: "Available instantly"
    },
    {
      name: "Vehicle Registration",
      status: "Available instantly"
    },
    {
      name: "Education Certificates",
      status: "Available within 24 hours"
    },
    {
      name: "Insurance Documents",
      status: "Available within 24 hours"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-green-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge 
              variant="secondary" 
              className="bg-green-50 text-green-600 border-0 px-4 py-1"
            >
              Official DigiLocker Partner
            </Badge>

            <h1 className="text-5xl font-bold tracking-tight">
              Access Your Documents
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent"> Securely with DigiLocker</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Connect your DigiLocker account to access all your government documents instantly. 
              Verify, share, and manage your documents with complete security and convenience.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 gap-2"
              >
                Connect DigiLocker
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="gap-2"
              >
                Learn More
                <FileText className="h-5 w-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-800">
                  Government Authorized
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                <Lock className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-800">
                  End-to-End Encrypted
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                <Fingerprint className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-800">
                  Legally Valid
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Experience Seamless
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent"> Document Management</span>
            </h2>
            <p className="text-gray-600">
              Our DigiLocker integration provides you with a secure and efficient way to manage all your important documents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-green-50 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Documents Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">
                Access All Your
                <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent"> Important Documents</span>
              </h2>
              
              <div className="grid gap-4">
                {supportedDocs.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-green-600" />
                      <span className="font-medium">{doc.name}</span>
                    </div>
                    <Badge 
                      variant="secondary"
                      className="bg-green-50 text-green-600"
                    >
                      {doc.status}
                    </Badge>
                  </div>
                ))}
              </div>

              <Button 
                className="bg-green-600 hover:bg-green-700 gap-2"
              >
                Connect Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl transform rotate-3" />
              <Card className="relative p-8 border-0">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="h-8 w-8 text-green-600" />
                      <span className="text-xl font-semibold">DigiLocker Status</span>
                    </div>
                    <Badge className="bg-green-100 text-green-600">
                      Connected
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="h-6 w-6 mt-1">
                          <CheckCircle2 className="h-6 w-6 text-green-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Connect in
                <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent"> Three Simple Steps</span>
              </h2>
              <p className="text-gray-600">
                Get started with DigiLocker integration in minutes
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Create Account",
                  description: "Sign up for GovEase using your mobile number or email"
                },
                {
                  step: 2,
                  title: "Connect DigiLocker",
                  description: "Securely link your DigiLocker account using Aadhaar"
                },
                {
                  step: 3,
                  title: "Access Documents",
                  description: "Start accessing and sharing your documents instantly"
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-semibold">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardContent className="p-12">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                <p className="text-green-100">
                  Join millions of citizens who are already using DigiLocker integration for seamless document access.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-white text-green-600 hover:bg-green-50 gap-2"
                  >
                    Connect DigiLocker
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-black border-white hover:bg-green-700 hover:text-white gap-2"
                  >
                    Contact Support
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