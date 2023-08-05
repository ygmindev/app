import { getApps, initializeApp } from 'firebase/app';
import { type Auth, type AuthError, type User } from 'firebase/auth';
import { getAuth, onAuthStateChanged, signInWithCustomToken, signOut } from 'firebase/auth';

import {
  type _UseSessionModel,
  type _UseSessionParamsModel,
} from '#lib-frontend/auth/hooks/useSession/_useSession.models';
import { isServer } from '#lib-platform/core/utils/isServer/isServer';
import { type SignInTokenModel } from '#lib-shared/auth/resources/SignIn/SignIn.models';
import { OfflineError } from '#lib-shared/http/errors/OfflineError/OfflineError';

let auth: Auth;

export const _useSession = ({ onError }: _UseSessionParamsModel): _UseSessionModel => ({
  getToken: async (): Promise<string | null> => {
    const currentUser = auth && auth.currentUser;
    return currentUser ? currentUser.getIdToken() : null;
  },

  initialize: async (onAuth): Promise<void> => {
    if (!isServer && !getApps().length) {
      initializeApp({
        apiKey: process.env.APP_FIREBASE_API_KEY,
        appId: process.env.APP_FIREBASE_APP_ID,
        authDomain: process.env.APP_FIREBASE_AUTH_DOMAIN,
        messagingSenderId: process.env.APP_FIREBASE_SENDER_ID,
        projectId: process.env.APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.APP_FIREBASE_STORAGE_BUCKET,
      });

      auth = getAuth();

      // auth &&
      //   process.env.APP_FIREBASE_USE_EMULATOR &&
      //   connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });

      // TODO: from locale
      // _auth && useDeviceLanguage(_auth);

      auth &&
        onAuthStateChanged(auth, (user: User | null) => {
          if (user) {
            user
              .getIdTokenResult()
              .then(({ claims }) => onAuth({ _id: user.uid, claims } as SignInTokenModel))
              .catch((e) => {
                const error =
                  (e as AuthError).code === 'auth/network-request-failed'
                    ? new OfflineError()
                    : (e as Error);
                onError && onError(error);
              });
          } else {
            void onAuth(null);
          }
        });
    }
  },

  signInWithToken: async (token: string): Promise<void> => {
    auth && (await signInWithCustomToken(auth, token));
  },

  signOut: async (): Promise<void> => auth && signOut(auth),
});
