import type { _UseSessionModel } from '@lib/frontend/auth/hooks/useSession/_useSession.models';
import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';
import type { SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';
import { getApps, initializeApp } from 'firebase/app';
import type { Auth, AuthError, User } from 'firebase/auth';
import {
  connectAuthEmulator,
  getAuth,
  onAuthStateChanged,
  signInWithCustomToken,
  signOut,
} from 'firebase/auth';

const APP_FIREBASE_API_KEY = getEnv('APP_FIREBASE_API_KEY');
const APP_FIREBASE_APP_ID = getEnv('APP_FIREBASE_APP_ID');
const APP_FIREBASE_AUTH_DOMAIN = getEnv('APP_FIREBASE_AUTH_DOMAIN');
const APP_FIREBASE_PROJECT_ID = getEnv('APP_FIREBASE_PROJECT_ID');
const APP_FIREBASE_SENDER_ID = getEnv('APP_FIREBASE_SENDER_ID');
const APP_FIREBASE_STORAGE_BUCKET = getEnv('APP_FIREBASE_STORAGE_BUCKET');
const APP_FIREBASE_USE_EMULATOR = getEnv('APP_FIREBASE_USE_EMULATOR', false);

let _auth: Auth;

export const _useSession = (): _UseSessionModel => ({
  getToken: async (): Promise<string | null> => {
    const currentUser = _auth && _auth.currentUser;
    return currentUser ? currentUser.getIdToken() : null;
  },

  initialize: async (onAuth): Promise<void> => {
    if (!isSsr && !getApps().length) {
      initializeApp({
        apiKey: APP_FIREBASE_API_KEY,
        appId: APP_FIREBASE_APP_ID,
        authDomain: APP_FIREBASE_AUTH_DOMAIN,
        messagingSenderId: APP_FIREBASE_SENDER_ID,
        projectId: APP_FIREBASE_PROJECT_ID,
        storageBucket: APP_FIREBASE_STORAGE_BUCKET,
      });

      _auth = getAuth();

      _auth &&
        APP_FIREBASE_USE_EMULATOR &&
        connectAuthEmulator(_auth, 'http://localhost:9099', { disableWarnings: true });

      // TODO: from locale
      // _auth && useDeviceLanguage(_auth);

      _auth &&
        onAuthStateChanged(_auth, async (user: User | null) => {
          if (user) {
            try {
              const { claims } = await user.getIdTokenResult();
              onAuth({ _id: user.uid, claims } as SignInTokenModel);
            } catch (e) {
              if ((e as AuthError).code === 'auth/network-request-failed') {
                throw new HttpError(HTTP_STATUS_CODE.SERVICE_UNAVAILABLE, 'Network Error');
              } else {
                throw e;
              }
            }
          } else {
            onAuth(null);
          }
        });
    }
  },

  signInWithToken: async (token: string): Promise<void> => {
    _auth && (await signInWithCustomToken(_auth, token));
  },

  signOut: async (): Promise<void> => _auth && signOut(_auth),
});