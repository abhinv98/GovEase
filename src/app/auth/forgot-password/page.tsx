import React from 'react';
import AuthWrapper from '@/components/auth/AuthWrapper';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <AuthWrapper showTrustedBadges={false}>
      <ForgotPasswordForm />
    </AuthWrapper>
  );
}
