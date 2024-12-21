"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  ChevronDown, 
  LogIn,
  ExternalLink 
} from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavItem {
  title: string;
  href: string;
  dropdownItems?: Array<{
    title: string;
    href: string;
  }>;
}

const navLinks: NavItem[] = [
  { 
    title: 'Services', 
    href: '/services',
    dropdownItems: [
      { title: 'Document Management', href: '/services/document-management' },
      { title: 'AI Assistant', href: '/services/ai-assistant' },
      { title: 'DigiLocker Integration', href: '/services/digilocker' }
    ] 
  },
  { 
    title: 'About', 
    href: '/about',
    dropdownItems: [
      { title: 'Our Mission', href: '/about/mission' },
      { title: 'How It Works', href: '/about/how-it-works' }
    ]
  },
  { 
    title: 'Resources', 
    href: '/resources',
    dropdownItems: [
      { title: 'Help Center', href: '/resources/help' },
      { title: 'FAQs', href: '/resources/faqs' },
      { title: 'Blog', href: '/resources/blog' }
    ]
  },
  { title: 'Contact', href: '/contact' }
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      // Initial check
      handleScroll();

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleMouseEnter = useCallback((title: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setActiveDropdown(title);
  }, [dropdownTimeout]);

  const handleMouseLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  }, []);

  const isActivePath = (href: string) => {
    return pathname === href || pathname?.startsWith(href + '/');
  };

  // Only render the full header after mounting to prevent hydration mismatch
  if (!isMounted) {
    return (
      <header className="h-20 w-full bg-white/50">
        <div className="container mx-auto px-4 sm:px-6">
          <nav className="flex h-20 items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">Gov</span>
              <span className="text-2xl font-bold text-gray-900">Ease</span>
            </div>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group transition-transform duration-200"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg blur-sm opacity-20 group-hover:opacity-30 transition-opacity" />
              <span className="relative text-2xl font-bold text-blue-600">Gov</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Ease</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.title} 
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link.title)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActivePath(link.href)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.title}
                  {link.dropdownItems && (
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === link.title ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </Link>
                
                {link.dropdownItems && (
                  <div 
                    className={`
                      absolute top-full left-0 mt-1 w-56 
                      transition-all duration-200 
                      ${activeDropdown === link.title 
                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
                        : 'opacity-0 translate-y-2 pointer-events-none'
                      }
                    `}
                    onMouseEnter={() => handleMouseEnter(link.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className={`inline-flex items-center justify-between w-full px-4 py-2.5 text-sm transition-colors group ${
                            isActivePath(item.href)
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                          }`}
                        >
                          {item.title}
                          <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              className="gap-2 hover:border-blue-600 hover:text-blue-600"
              onClick={() => router.push('/auth/login')}
            >
              <LogIn className="h-4 w-4" />
              Log In
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 gap-2"
              onClick={() => router.push('/auth/register')}
            >
              Get Started
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <div key={link.title} className="space-y-2">
                <Link
                  href={link.href}
                  className={`inline-flex w-full items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActivePath(link.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
                {link.dropdownItems && (
                  <div className="pl-8 space-y-2">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className={`inline-flex w-full items-center px-4 py-2 text-sm transition-colors ${
                          isActivePath(item.href)
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 px-4 space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-center gap-2"
                onClick={() => {
                  router.push('/auth/login');
                  setIsMenuOpen(false);
                }}
              >
                <LogIn className="h-4 w-4" />
                Log In
              </Button>
              <Button 
                className="w-full justify-center gap-2 bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  router.push('/auth/register');
                  setIsMenuOpen(false);
                }}
              >
                Get Started
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;