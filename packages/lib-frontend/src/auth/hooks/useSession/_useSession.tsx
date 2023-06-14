import { getApps, initializeApp } from 'firebase/app';
import type { Auth, AuthError, User } from 'firebase/auth';
import {
  connectAuthEmulator,
  getAuth,
  onAuthStateChanged,
  signInWithCustomToken,
  signOut,
} from 'firebase/auth';

import type {
  _UseSessionModel,
  _UseSessionParamsModel,
} from '#lib-frontend/auth/hooks/useSession/_useSession.models';
import { isSsr } from '#lib-platform/core/utils/isSsr/isSsr';
import type { SignInTokenModel } from '#lib-shared/auth/resources/SignIn/SignIn.models';
import { HttpError } from '#lib-shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '#lib-shared/http/errors/HttpError/HttpError.constants';

let auth: Auth;

export const _useSession = ({ onError }: _UseSessionParamsModel): _UseSessionModel => ({
  getToken: async (): Promise<string | null> => {
    const currentUser = auth && auth.currentUser;
    return currentUser ? currentUser.getIdToken() : null;
  },

  initialize: async (onAuth): Promise<void> => {
    if (!isSsr && !getApps().length) {
      initializeApp({
        apiKey: process.env.APP_FIREBASE_API_KEY,
        appId: process.env.APP_FIREBASE_APP_ID,
        authDomain: process.env.APP_FIREBASE_AUTH_DOMAIN,
        messagingSenderId: process.env.APP_FIREBASE_SENDER_ID,
        projectId: process.env.APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.APP_FIREBASE_STORAGE_BUCKET,
      });

      auth = getAuth();

      auth &&
        process.env.APP_FIREBASE_USE_EMULATOR &&
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });

      // TODO: from locale
      // _auth && useDeviceLanguage(_auth);

      auth &&
        onAuthStateChanged(auth, async (user: User | null) => {
          if (user) {
            try {
              const { claims } = await user.getIdTokenResult();
              onAuth({ _id: user.uid, claims } as SignInTokenModel);
            } catch (e) {
              const error =
                (e as AuthError).code === 'auth/network-request-failed'
                  ? new HttpError(HTTP_STATUS_CODE.SERVICE_UNAVAILABLE, 'Network Error')
                  : e;
              onError && onError(error as Error);
            }
          } else {
            onAuth(null);
          }
        });
    }
  },

  signInWithToken: async (token: string): Promise<void> => {
    auth && (await signInWithCustomToken(auth, token));
  },

  signOut: async (): Promise<void> => auth && signOut(auth),
});
