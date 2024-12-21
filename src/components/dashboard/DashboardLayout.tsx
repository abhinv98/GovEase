"use client";

import React, { useState } from 'react';
import { 
  Layout, 
  FileText, 
  Bot, 
  Bell, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  ChevronDown,
  Shield,
  User,
  Home,
  Clock,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Home', href: '/dashboard', icon: Home },
  { name: 'Documents', href: '/dashboard/documents', icon: FileText },
  { name: 'Applications', href: '/dashboard/applications', icon: Layout },
  { name: 'AI Assistant', href: '/dashboard/ai-assistant', icon: Bot },
  { name: 'DigiLocker', href: '/dashboard/digilocker', icon: Shield },
];

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Backdrop */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full bg-white border-r transition-all duration-300 ease-in-out
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isSidebarOpen ? 'w-64' : 'w-20'}`}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center gap-2 px-4 border-b">
          <Shield className="h-8 w-8 text-blue-600 flex-shrink-0" />
          {isSidebarOpen && (
            <span className="text-xl font-bold truncate">
              <span className="text-blue-600">Gov</span>
              <span className="text-gray-900">Ease</span>
            </span>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors group relative"
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {isSidebarOpen && <span className="text-sm font-medium">{item.name}</span>}
              {!isSidebarOpen && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {item.name}
                </div>
              )}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className={`${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'} transition-all duration-300`}>
        {/* Fixed Navbar */}
        <header className="sticky top-0 z-30 h-16 bg-white border-b">
          <div className="h-full px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden lg:flex"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <ChevronRight className={`h-5 w-5 transition-transform ${!isSidebarOpen ? 'rotate-0' : 'rotate-180'}`} />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
              </Button>

              {/* Profile Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2"
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                >
                  <img
                    src="/api/placeholder/32/32"
                    alt="Profile"
                    className="h-8 w-8 rounded-full"
                  />
                  <ChevronDown className={`h-4 w-4 transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
                </Button>

                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-1 z-50">
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 w-full justify-start px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 w-full justify-start px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </Button>
                    <hr className="my-1" />
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 w-full justify-start px-4 py-2 text-red-600 hover:bg-red-50"
                      onClick={() => {/* Add logout logic */}}
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;