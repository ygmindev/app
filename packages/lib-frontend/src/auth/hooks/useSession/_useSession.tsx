import {
  type _UseSessionModel,
  type _UseSessionParamsModel,
} from '@lib/frontend/auth/hooks/useSession/_useSession.models';
import { type SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { OfflineError } from '@lib/shared/http/errors/OfflineError/OfflineError';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { isServer } from '@lib/shared/web/utils/isServer/isServer';
import { getApps, initializeApp } from 'firebase/app';
import { type Auth, type AuthError, onIdTokenChanged, type User } from 'firebase/auth';
import { getAuth, onAuthStateChanged, signInWithCustomToken, signOut } from 'firebase/auth';

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

          onIdTokenChanged(
            auth,
            (user: User | null) => void user?.getIdToken(true).then(onTokenRefresh),
          );

          onAuthStateChanged(auth, (user: User | null) => {
            user
              ? user
                  .getIdTokenResult(true)
                  .then(({ claims, token }) =>
                    onAuthenticate({ _id: user.uid, claims } as SignInTokenModel, token),
                  )
                  .catch((e) => {
                    const error =
                      (e as AuthError).code === 'auth/network-request-failed'
                        ? new OfflineError()
                        : (e as Error);
                    onError && onError(error);
                  })
              : void onAuthenticate(null);
          });
        }
      } else {
        logger.error('Auth API key is missing');
      }
    }
  },

  refreshToken: async (): Promise<string | null> => auth?.currentUser?.getIdToken() ?? null,

  signInWithToken: async (token: string): Promise<void> => {
    auth && (await signInWithCustomToken(auth, token));
  },

  signOut: async (): Promise<void> => auth && signOut(auth),
});
