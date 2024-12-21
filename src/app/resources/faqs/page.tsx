"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  ChevronDown,
  ArrowRight,
  FileText,
  Shield,
  Settings,
  Users,
  Mail,
  Phone,
  MessageSquare,
  Bot,
  FileQuestion
} from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  icon: React.ElementType;
  title: string;
  description: string;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    icon: FileText,
    title: "Getting Started",
    description: "Basic information about using GovEase",
    faqs: [
      {
        question: "What is GovEase and how does it work?",
        answer: "GovEase is a platform that simplifies access to government services. It combines AI assistance, document management, and real-time tracking to help you navigate government processes efficiently."
      },
      {
        question: "How do I create an account?",
        answer: "You can create an account using your mobile number or email. We'll verify your identity through Aadhaar-based KYC for secure access to all features."
      },
      {
        question: "Is GovEase available in my language?",
        answer: "Yes, GovEase supports 10+ Indian languages including Hindi, Tamil, Telugu, Bengali, and more. You can change your language preference in account settings."
      }
    ]
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "Questions about our AI-powered help",
    faqs: [
      {
        question: "What can the AI assistant help me with?",
        answer: "Our AI assistant can help you understand government procedures, fill forms, track applications, and answer questions about required documents. It's available 24/7 in multiple languages."
      },
      {
        question: "How accurate is the AI assistance?",
        answer: "Our AI is trained on the latest government guidelines and procedures. However, for critical matters, we recommend verifying information through official government sources."
      }
    ]
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Information about data protection",
    faqs: [
      {
        question: "How is my data protected?",
        answer: "We use bank-grade encryption for all data storage and transmission. Your documents are encrypted at rest and in transit, and we comply with all government data protection regulations."
      },
      {
        question: "Who can access my documents?",
        answer: "Only you and any authorized users you specifically grant access to can view your documents. Our support team cannot access your files without explicit permission."
      }
    ]
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Help with document handling",
    faqs: [
      {
        question: "How do I connect my DigiLocker?",
        answer: "Go to your dashboard, click on 'Connect DigiLocker', and follow the authentication process. Once connected, your documents will automatically sync with your GovEase account."
      },
      {
        question: "What types of documents can I store?",
        answer: "You can store all government-issued documents including Aadhaar, PAN, driving license, vehicle registration, education certificates, and more. Documents are automatically organized by category."
      }
    ]
  }
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeFAQ, setActiveFAQ] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (title: string) => {
    setActiveCategory(activeCategory === title ? null : title);
  };

  const toggleFAQ = (question: string) => {
    setActiveFAQ(activeFAQ === question ? null : question);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-50 via-white to-violet-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge 
              variant="secondary" 
              className="bg-violet-50 text-violet-600 border-0 px-4 py-1"
            >
              Frequently Asked Questions
            </Badge>

            <h1 className="text-5xl font-bold tracking-tight">
              Get Quick
              <span className="bg-gradient-to-r from-violet-600 to-violet-500 bg-clip-text text-transparent"> Answers</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about GovEase services, or contact our support team for additional help.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                variant="outline"
                className="gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                Contact Support
              </Button>
              <Button 
                variant="outline"
                className="gap-2"
              >
                <FileQuestion className="h-4 w-4" />
                Submit a Question
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, index) => (
              <Card 
                key={index}
                className="border border-gray-100 hover:border-violet-100 transition-all duration-300"
              >
                <CardContent className="p-6">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.title)}
                    className="w-full"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-violet-50 flex items-center justify-center">
                          <category.icon className="h-6 w-6 text-violet-600" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold">{category.title}</h3>
                          <p className="text-gray-600">{category.description}</p>
                        </div>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                          activeCategory === category.title ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* FAQ List */}
                  {activeCategory === category.title && (
                    <div className="mt-6 space-y-4">
                      {category.faqs.map((faq, faqIndex) => (
                        <div 
                          key={faqIndex}
                          className="border-t border-gray-100 pt-4"
                        >
                          <button
                            onClick={() => toggleFAQ(faq.question)}
                            className="w-full text-left"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium pr-8">{faq.question}</h4>
                              <ChevronDown 
                                className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                                  activeFAQ === faq.question ? 'rotate-180' : ''
                                }`}
                              />
                            </div>
                          </button>
                          
                          {activeFAQ === faq.question && (
                            <p className="mt-4 text-gray-600 pl-6 border-l-2 border-violet-200">
                              {faq.answer}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-violet-600 to-violet-500 text-white">
            <CardContent className="p-12">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold">Still Need Help?</h2>
                <p className="text-violet-100">
                  Our support team is available 24/7 to assist you with any questions or concerns.
                </p>
                <div className="flex flex-wrap gap-8 justify-center">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <span>support@govease.in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <span>1800-XXX-XXXX</span>
                  </div>
                </div>
                <Button 
                  size="lg"
                  className="bg-white text-violet-600 hover:bg-violet-50 gap-2"
                >
                  Contact Support
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}