import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      // Add your password reset logic here
      console.log('Password reset requested for:', email);
      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <h2 className="text-xl font-semibold">Check Your Email</h2>
            <p className="text-gray-600">
              We've sent password reset instructions to:
              <br />
              <span className="font-medium text-gray-900">{email}</span>
            </p>
            <div className="pt-4">
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => setIsSubmitted(false)}
              >
                Try another email
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-gray-600">
            Didn't receive the email?{' '}
            <button 
              onClick={handleSubmit}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Click to resend
            </button>
          </p>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold text-center">
          Reset Your Password
        </CardTitle>
        <p className="text-center text-gray-600">
          Enter your email address and we'll send you instructions to reset your password
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className={`w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  error ? 'border-red-500' : ''
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>

          <Button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2"
          >
            Send Reset Instructions
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-gray-600">
          Remember your password?{' '}
          <a href="/auth/login" className="text-blue-600 hover:text-blue-700 font-medium">
            Sign in
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default ForgotPasswordForm;