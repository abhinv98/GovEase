"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  ArrowRight,
  Calendar,
  Clock,
  User,
  ChevronRight,
  Filter,
  Tag,
  Bookmark
} from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: "Understanding DigiLocker Integration: A Complete Guide",
    excerpt: "Learn how GovEase seamlessly integrates with DigiLocker to provide secure access to your government documents.",
    category: "Product Updates",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    author: "Priya Sharma",
    image: "/api/placeholder/400/250",
    tags: ["DigiLocker", "Security", "Documentation"]
  },
  {
    title: "AI in Government Services: The Future is Here",
    excerpt: "Discover how artificial intelligence is transforming the way citizens interact with government services.",
    category: "Technology",
    date: "Mar 12, 2024",
    readTime: "8 min read",
    author: "Rahul Kumar",
    image: "/api/placeholder/400/250",
    tags: ["AI", "Innovation", "Digital India"]
  },
  {
    title: "5 Ways to Speed Up Your Document Processing",
    excerpt: "Expert tips to help you get your government documents processed faster and more efficiently.",
    category: "Tips & Tricks",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    author: "Amit Patel",
    image: "/api/placeholder/400/250",
    tags: ["Productivity", "Documents", "Tips"]
  },
  {
    title: "New Feature: Multi-Language Support Now Live",
    excerpt: "GovEase now supports 10+ Indian languages. Learn how to use the platform in your preferred language.",
    category: "Product Updates",
    date: "Mar 8, 2024",
    readTime: "4 min read",
    author: "Sneha Reddy",
    image: "/api/placeholder/400/250",
    tags: ["Languages", "Updates", "Accessibility"]
  },
  {
    title: "Securing Your Digital Documents: Best Practices",
    excerpt: "Essential security tips to protect your sensitive documents in the digital age.",
    category: "Security",
    date: "Mar 5, 2024",
    readTime: "7 min read",
    author: "Vikram Singh",
    image: "/api/placeholder/400/250",
    tags: ["Security", "Privacy", "Digital Safety"]
  },
  {
    title: "Government Services: Digital Transformation Journey",
    excerpt: "How digital platforms are revolutionizing government service delivery in India.",
    category: "Industry Insights",
    date: "Mar 3, 2024",
    readTime: "10 min read",
    author: "Dr. Meena Iyer",
    image: "/api/placeholder/400/250",
    tags: ["Digital India", "Government", "Technology"]
  }
];

const categories = [
  "All Posts",
  "Product Updates",
  "Technology",
  "Tips & Tricks",
  "Security",
  "Industry Insights"
];

const popularTags = [
  "Digital India",
  "Security",
  "Technology",
  "Innovation",
  "Documents",
  "Privacy"
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All Posts" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Blog & Updates
            </Badge>

            <h1 className="text-5xl font-bold tracking-tight">
              Latest Insights &
              <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent"> Updates</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Stay informed about the latest features, tips, and insights about government services digitization.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? 
                    "bg-green-600 hover:bg-green-700" : 
                    "hover:border-green-600 hover:text-green-600"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <Card 
                    key={index}
                    className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <Badge 
                          className="absolute top-4 left-4 bg-green-50 text-green-600 border-0"
                        >
                          {post.category}
                        </Badge>
                      </div>
                      
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold group-hover:text-green-600 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 pt-4 border-t">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button 
                  variant="outline"
                  className="gap-2 hover:border-green-600 hover:text-green-600"
                >
                  Load More Articles
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Popular Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-gray-100 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-green-50 border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <Bookmark className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold">Newsletter</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    Get the latest updates and insights delivered to your inbox.
                  </p>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4"
                  />

                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}