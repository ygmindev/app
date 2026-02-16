import { _auth } from '@lib/frontend/auth/hooks/useAuth/_useAuth';
import { type _UseOAuthModel } from '@lib/frontend/auth/hooks/useOAuth/_useOAuth.models';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

export const _useOAuth = (): _UseOAuthModel => {
  const { signOut, verifyToken } = useSignInResource();

  let resolveAuth: () => void;
  let rejectAuth: (error?: Error) => void;

  const login = useGoogleLogin({
    onError: (e) => {
      rejectAuth?.(e as Error);
    },
    onSuccess: async (response) => {
      try {
        const credential = GoogleAuthProvider.credential(null, response.access_token);
        const result = await signInWithCredential(_auth, credential);
        const token = await result.user.getIdToken();
        token && (await verifyToken(token));
        resolveAuth?.();
      } catch (e) {
        rejectAuth?.(e as Error);
      }
    },
  });

  return {
    google: {
      signIn: () =>
        new Promise<void>((resolve, reject) => {
          resolveAuth = resolve;
          rejectAuth = reject;
          login();
        }),

      signOut,
    },
  };
};

// import { _auth } from '@lib/frontend/auth/hooks/useAuth/_useAuth';
// import { type _UseOAuthModel } from '@lib/frontend/auth/hooks/useOAuth/_useOAuth.models';
// import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// const _provider = new GoogleAuthProvider();

// export const _useOAuth = (): _UseOAuthModel => {
//   const { signOut, verifyToken } = useSignInResource();

//   return {
//     google: {
//       signIn: async () => {
//         const result = await signInWithPopup(_auth, _provider);
//         const token = await result.user.getIdToken();
//         await verifyToken(token);
//       },

//       signOut,
//     },
//   };
// };
