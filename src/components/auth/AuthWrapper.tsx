"use client";

import React from 'react';
import { Shield } from 'lucide-react';
import Link from 'next/link';

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Minimal Branding */}
      <div className="hidden lg:flex lg:flex-col lg:w-[500px] bg-gradient-to-b from-blue-50 to-white p-8 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">
            <span className="text-blue-600">Gov</span>
            <span className="text-gray-900">Ease</span>
          </span>
        </Link>

        {/* Simple Welcome Message */}
        <div className="flex-grow flex flex-col justify-center max-w-lg">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                GovEase
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your trusted platform for simplified government services.
            </p>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="mt-auto text-sm text-gray-500">
          © 2024 GovEase. Government Verified Platform
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;