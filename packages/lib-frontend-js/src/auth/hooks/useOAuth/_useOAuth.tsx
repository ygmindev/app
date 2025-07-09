import { type _UseOAuthModel } from '@lib/frontend/auth/hooks/useOAuth/_useOAuth.models';
import { useGoogleLogin } from '@react-oauth/google';

export const _useOAuth = (): _UseOAuthModel => {
  const _signInGoogle = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: (codeResponse) => console.log(codeResponse),
  });

  return {
    google: {
      signIn: async () => _signInGoogle(),
      signOut: async () => {
        const token = localStorage.getItem('google_token');
        if (token) {
          await fetch(`https://oauth2.googleapis.com/revoke?token=${token}`, {
            headers: { 'Content-type': 'application/x-www-form-urlencoded' },
            method: 'POST',
          });
        }
        localStorage.removeItem('google_token');
        // setUser(null);
      },
    },
  };
};
