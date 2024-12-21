import MainLayout from '@/components/layout/MainLayout';
import LoginForm from '@/components/auth/LoginForm';
import AuthWrapper from '@/components/auth/AuthWrapper';

export default function LoginPage() {
  return (
    <MainLayout>
      <AuthWrapper>
        <LoginForm />
      </AuthWrapper>
    </MainLayout>
  );
}