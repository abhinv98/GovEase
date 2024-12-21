import MainLayout from '@/components/layout/MainLayout';
import RegisterForm from '@/components/auth/RegisterForm';
import AuthWrapper from '@/components/auth/AuthWrapper';

export default function RegisterPage() {
  return (
    <MainLayout>
      <AuthWrapper>
        <RegisterForm />
      </AuthWrapper>
    </MainLayout>
  );
}