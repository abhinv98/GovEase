"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  FileText,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  Book,
  FileQuestion,
  Settings,
  Shield,
  Clock,
  Upload,
  Users,
  Zap
} from 'lucide-react';

const categories = [
  {
    icon: FileText,
    title: "Documentation",
    description: "User guides and detailed documentation",
    articles: "25+ articles"
  },
  {
    icon: Upload,
    title: "Document Upload",
    description: "Learn how to upload and manage documents",
    articles: "15+ articles"
  },
  {
    icon: Shield,
    title: "Security",
    description: "Privacy and security guidelines",
    articles: "10+ articles"
  },
  {
    icon: Settings,
    title: "Account Settings",
    description: "Account management and preferences",
    articles: "20+ articles"
  },
  {
    icon: Clock,
    title: "Process Tracking",
    description: "Track your application status",
    articles: "12+ articles"
  },
  {
    icon: Users,
    title: "User Access",
    description: "Roles and permissions management",
    articles: "8+ articles"
  }
];

const popularArticles = [
  {
    title: "How to upload documents to DigiLocker",
    views: "2.5k views",
    category: "Document Upload"
  },
  {
    title: "Tracking your application status",
    views: "1.8k views",
    category: "Process Tracking"
  },
  {
    title: "Setting up two-factor authentication",
    views: "1.5k views",
    category: "Security"
  },
  {
    title: "Managing user permissions",
    views: "1.2k views",
    category: "User Access"
  }
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-white to-indigo-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge 
              variant="secondary" 
              className="bg-indigo-50 text-indigo-600 border-0 px-4 py-1"
            >
              Help Center
            </Badge>

            <h1 className="text-5xl font-bold tracking-tight">
              How can we
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent"> help you?</span>
            </h1>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                variant="outline"
                className="gap-2"
              >
                <FileQuestion className="h-4 w-4" />
                Browse FAQs
              </Button>
              <Button 
                variant="outline"
                className="gap-2"
              >
                <Book className="h-4 w-4" />
                User Guides
              </Button>
              <Button 
                variant="outline"
                className="gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-gray-600">
              Find the help you need by exploring our help categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="group border border-gray-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                      <category.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                      <p className="text-sm text-indigo-600">{category.articles}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Articles</h2>
            <p className="text-gray-600">
              Quick solutions to common questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-md transition-shadow cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="font-medium hover:text-indigo-600 transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{article.category}</span>
                          <span>•</span>
                          <span>{article.views}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Need More Help?</h2>
                  <p className="text-indigo-100">
                    Our support team is here to help you with any questions or issues.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5" />
                      <span>support@govease.in</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5" />
                      <span>1800-XXX-XXXX</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">24/7 Support</h3>
                      <p className="text-indigo-100">Always here to help you</p>
                    </div>
                  </div>
                  <Button 
                    size="lg"
                    className="w-full bg-white text-indigo-600 hover:bg-indigo-50 gap-2"
                  >
                    Contact Support
                    <ArrowRight className="h-5 w-5" />
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