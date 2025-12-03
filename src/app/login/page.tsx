'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { LoadingSpinner } from '@/components/loading-spinner';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function GoogleIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 mr-2">
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.05 1.05-2.36 1.95-4.25 1.95-5.07 0-9.2-3.9-9.2-9.2s4.13-9.2 9.2-9.2c2.6 0 4.5 1.05 5.9 2.36l-2.4 2.4c-.8-.7-1.85-1.2-3.5-1.2-4.1 0-7.4 3.3-7.4 7.4s3.3 7.4 7.4 7.4c2.8 0 4.3-.9 5.2-1.9.8-.9 1.2-2.3 1.4-4.2h-6.6z"
      ></path>
    </svg>
  );
}

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/phones');
    }
  }, [status, router]);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn('google', { callbackUrl: '/phones' });
    } catch (error) {
      console.error('Sign in failed', error);
      setLoading(false);
    }
  };

  if (status === 'loading' || status === 'authenticated') {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <LoadingSpinner className="h-8 w-8 text-primary" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="self-center pb-4">
            <Logo />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome to TelMarq
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in to access your mobile marketplace
          </p>
        </div>
        <Button
          variant="outline"
          type="button"
          onClick={handleSignIn}
          disabled={loading}
          className="w-full"
        >
          {loading ? (
            <LoadingSpinner className="mr-2" />
          ) : (
            <GoogleIcon />
          )}
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
