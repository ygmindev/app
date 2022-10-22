import type { _UseSessionModel } from '@lib/frontend/auth/hooks/useSession/_useSession.models';
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

const REACT_APP_FIREBASE_API_KEY = getEnv('REACT_APP_FIREBASE_API_KEY');
const REACT_APP_FIREBASE_APP_ID = getEnv('REACT_APP_FIREBASE_APP_ID');
const REACT_APP_FIREBASE_AUTH_DOMAIN = getEnv('REACT_APP_FIREBASE_AUTH_DOMAIN');
const REACT_APP_FIREBASE_PROJECT_ID = getEnv('REACT_APP_FIREBASE_PROJECT_ID');
const REACT_APP_FIREBASE_SENDER_ID = getEnv('REACT_APP_FIREBASE_SENDER_ID');
const REACT_APP_FIREBASE_STORAGE_BUCKET = getEnv('REACT_APP_FIREBASE_STORAGE_BUCKET');
const REACT_APP_FIREBASE_USE_EMULATOR = getEnv('REACT_APP_FIREBASE_USE_EMULATOR', false);

let _auth: Auth;

export const _useSession = (): _UseSessionModel => ({
  getToken: async (): Promise<string | null> => {
    const currentUser = _auth && _auth.currentUser;
    return currentUser ? currentUser.getIdToken() : null;
  },

  initialize: async (onAuth): Promise<void> => {
    if (!__IS_SSR__ && !getApps().length) {
      initializeApp({
        apiKey: REACT_APP_FIREBASE_API_KEY,
        appId: REACT_APP_FIREBASE_APP_ID,
        authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
        messagingSenderId: REACT_APP_FIREBASE_SENDER_ID,
        projectId: REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
      });

      _auth = getAuth();

      _auth &&
        REACT_APP_FIREBASE_USE_EMULATOR &&
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
