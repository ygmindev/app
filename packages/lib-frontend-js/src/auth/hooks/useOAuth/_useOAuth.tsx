import { type _UseOAuthModel } from '@lib/frontend/auth/hooks/useOAuth/_useOAuth.models';
import { useSignInResource } from '@lib/frontend/auth/hooks/useSignInResource/useSignInResource';
import { useGoogleLogin } from '@react-oauth/google';

export const _useOAuth = (): _UseOAuthModel => {
  const { signOut, verifyToken } = useSignInResource();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      response.access_token && (await verifyToken(response.access_token));
    },
  });

  return {
    google: {
      signIn: async () => login(),

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
