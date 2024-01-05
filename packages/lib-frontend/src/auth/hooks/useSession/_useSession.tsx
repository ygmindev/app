import { getApps, initializeApp } from 'firebase/app';
import { type Auth, type AuthError, onIdTokenChanged, type User } from 'firebase/auth';
import { getAuth, onAuthStateChanged, signInWithCustomToken, signOut } from 'firebase/auth';

import {
  type _UseSessionModel,
  type _UseSessionParamsModel,
} from '#lib-frontend/auth/hooks/useSession/_useSession.models';
import { isServer } from '#lib-platform/core/utils/isServer/isServer';
import { type SignInTokenModel } from '#lib-shared/auth/resources/SignIn/SignIn.models';
import { OfflineError } from '#lib-shared/http/errors/OfflineError/OfflineError';
import { warn } from '#lib-shared/logging/utils/logger/logger';

let auth: Auth;

export const _useSession = ({ onError }: _UseSessionParamsModel): _UseSessionModel => ({
  initialize: async ({ onAuthenticate, onTokenRefresh }): Promise<void> => {
    if (!isServer && !getApps().length) {
      if (process.env.APP_FIREBASE_API_KEY) {
        initializeApp({
          apiKey: process.env.APP_FIREBASE_API_KEY,
          appId: process.env.APP_FIREBASE_APP_ID,
          authDomain: process.env.APP_FIREBASE_AUTH_DOMAIN,
          messagingSenderId: process.env.APP_FIREBASE_SENDER_ID,
          projectId: process.env.APP_FIREBASE_PROJECT_ID,
          storageBucket: process.env.APP_FIREBASE_STORAGE_BUCKET,
        });

        auth = getAuth();

        if (auth) {
          //   process.env.APP_FIREBASE_USE_EMULATOR &&
          //   connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });

          // TODO: from locale
          // useDeviceLanguage(_auth);

          onAuthStateChanged(auth, (user: User | null) => {
            if (user) {
              user
                .getIdTokenResult()
                .then(({ claims }) => onAuthenticate({ _id: user.uid, claims } as SignInTokenModel))
                .catch((e) => {
                  const error =
                    (e as AuthError).code === 'auth/network-request-failed'
                      ? new OfflineError()
                      : (e as Error);
                  onError && onError(error);
                });
            } else {
              void onAuthenticate(null);
            }
          });

          onIdTokenChanged(auth, (user: User | null) => {
            if (user) {
              void user.getIdToken().then(onTokenRefresh);
            }
          });
        }
      } else {
        warn('Auth API key is missing');
      }
    }
  },

  signInWithToken: async (token: string): Promise<void> => {
    auth && (await signInWithCustomToken(auth, token));
  },

  signOut: async (): Promise<void> => auth && signOut(auth),
});
