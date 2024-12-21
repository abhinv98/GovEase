"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Quote,
  MapPin,
  BadgeCheck,
  ArrowRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  image: string;
  badge?: string;
  date: string;
  verifiedUser?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Small Business Owner",
    location: "Mumbai, Maharashtra",
    content: "GovEase transformed how I handle business compliance. What used to take weeks now takes just days. The AI assistance is incredibly helpful, and the document management system keeps everything organized. I've saved countless hours and reduced stress significantly.",
    rating: 5,
    image: "/api/placeholder/64/64",
    badge: "Business User",
    date: "2 weeks ago",
    verifiedUser: true
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Retired Teacher",
    location: "Delhi",
    content: "At my age, dealing with government procedures was becoming overwhelming. GovEase simplified everything. The notifications ensure I never miss important deadlines, and the support team is always there to help. The interface is so intuitive that even seniors can use it easily.",
    rating: 5,
    image: "/api/placeholder/64/64",
    date: "1 month ago",
    verifiedUser: true
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "IT Professional",
    location: "Bangalore, Karnataka",
    content: "The integration with DigiLocker and the secure document handling give me peace of mind. The platform is intuitive, and the automated form filling saves hours of my time. Their customer support is exceptional - always ready to help with complex queries.",
    rating: 5,
    image: "/api/placeholder/64/64",
    badge: "Tech Professional",
    date: "3 weeks ago",
    verifiedUser: true
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-6">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-50 rounded-full">
            <Quote className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-600">
              Success Stories
            </span>
          </div>

          <h2 className="text-4xl font-bold">
            Trusted by Citizens
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Across India</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join thousands of satisfied users who have simplified their government service experience with GovEase.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border border-gray-100 shadow-lg hover:border-blue-100 transition-all duration-300">
            <CardContent className="p-8 md:p-12 relative">
              {/* Decorative Quotes */}
              <Quote className="absolute top-8 left-8 h-12 w-12 text-blue-600/10" />
              <Quote className="absolute bottom-8 right-8 h-12 w-12 text-blue-600/10 rotate-180" />
              
              <div className="space-y-8">
                {/* Content */}
                <p className="text-xl text-gray-700 leading-relaxed relative z-10 px-12">
                  "{activeTestimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    5.0 rating
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Author Image */}
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-20" />
                    <img
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      className="relative h-16 w-16 rounded-full object-cover"
                    />
                  </div>

                  {/* Author Details */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">
                        {activeTestimonial.name}
                      </h3>
                      {activeTestimonial.verifiedUser && (
                        <BadgeCheck className="h-5 w-5 text-blue-600" />
                      )}
                    </div>
                    <p className="text-gray-600">
                      {activeTestimonial.role}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {activeTestimonial.location}
                      </span>
                      <span>•</span>
                      <span>{activeTestimonial.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="h-10 w-10 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    activeIndex === index 
                      ? 'w-8 bg-blue-600' 
                      : 'w-2 bg-gray-300 hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="h-10 w-10 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* View All Link */}
          <div className="text-center mt-12">
            <a 
              href="/testimonials" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 group"
            >
              View All Success Stories
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;