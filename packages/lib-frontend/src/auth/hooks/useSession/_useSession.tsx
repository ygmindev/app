import type {
  _UseSessionModel,
  _UseSessionParamsModel,
} from '@lib/frontend/auth/hooks/useSession/_useSession.models';
import { isSsr } from '@lib/platform/core/utils/isSsr/isSsr';
import type { SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
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

let _auth: Auth;

export const _useSession = ({ onError }: _UseSessionParamsModel): _UseSessionModel => ({
  getToken: async (): Promise<string | null> => {
    const currentUser = _auth && _auth.currentUser;
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

      _auth = getAuth();

      _auth &&
        process.env.APP_FIREBASE_USE_EMULATOR &&
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
              const _error =
                (e as AuthError).code === 'auth/network-request-failed'
                  ? new HttpError(HTTP_STATUS_CODE.SERVICE_UNAVAILABLE, 'Network Error')
                  : e;
              onError && onError(_error as Error);
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
