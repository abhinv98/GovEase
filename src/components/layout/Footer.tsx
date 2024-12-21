"use client";

import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  ArrowRight,
  Shield,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialLink {
  icon: React.ElementType;
  label: string;
  href: string;
}

const CURRENT_YEAR = "2024";

const quickLinks = [
  'About Us',
  'Our Services',
  'Success Stories',
  'Contact Us',
  'FAQ',
  'Blog'
];

const services = [
  'Document Management',
  'AI Assistance',
  'DigiLocker Integration',
  'Application Tracking',
  'Smart Notifications',
  'Expert Support'
];

const resources = [
  'Help Center',
  'Developer API',
  'Partner Program',
  'Government Schemes',
  'Privacy Policy',
  'Terms of Service'
];

const contact = {
  email: 'support@govease.in',
  phone: '1800-XXX-XXXX',
  address: 'Mumbai, Maharashtra, India'
};

const socialLinks: SocialLink[] = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50">
      {/* Newsletter Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="rounded-2xl bg-blue-600 p-8 md:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,white,transparent_50%)]" />
          </div>

          <div className="relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stay Updated with GovEase
              </h3>
              <p className="text-blue-100 mb-8">
                Get the latest updates about new features and government service changes
              </p>

              <form 
                onSubmit={(e) => e.preventDefault()} 
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/10 text-white placeholder:text-blue-100 border border-white/20"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-white text-blue-600 hover:bg-blue-50 transition-colors gap-2"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">Gov</span>
              <span className="text-2xl font-bold text-gray-900">Ease</span>
            </div>

            <p className="text-gray-600">
              Simplifying government services with technology and innovation. Making citizen services accessible and efficient.
            </p>

            <div className="space-y-4">
              <a 
                href={`mailto:${contact.email}`} 
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <Mail className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                <span>{contact.email}</span>
              </a>

              <a 
                href={`tel:${contact.phone}`} 
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <Phone className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                <span>{contact.phone}</span>
              </a>

              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>{contact.address}</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-5 w-5 text-blue-600" />
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Globe className="h-5 w-5 text-blue-600" />
                <span>CERT-IN</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 flex items-center group transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-all" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 flex items-center group transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-all" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Resources</h3>
            <ul className="space-y-4">
              {resources.map((resource) => (
                <li key={resource}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 flex items-center group transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-all" />
                    <span>{resource}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-600 text-sm">
              © {CURRENT_YEAR} GovEase. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-8">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;