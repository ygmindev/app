import { type FirebaseAuthTypes } from '@react-native-firebase/auth';
import firebaseAuth from '@react-native-firebase/auth';
import { type AuthError } from 'firebase/auth';

import {
  type _UseSessionModel,
  type _UseSessionParamsModel,
} from '#lib-frontend/auth/hooks/useSession/_useSession.models';
import { HttpError } from '#lib-shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '#lib-shared/http/errors/HttpError/HttpError.constants';

let auth: FirebaseAuthTypes.Module;

export const _useSession = ({ onError }: _UseSessionParamsModel): _UseSessionModel => ({
  getToken: async (): Promise<string | null> => {
    const { currentUser } = auth;
    return currentUser && currentUser.getIdToken(true);
  },

  initialize: async (onAuth): Promise<void> => {
    if (process.env.NODE_ENV !== 'test') {
      auth = firebaseAuth();
      process.env.APP_FIREBASE_USE_EMULATOR && auth.useEmulator('http://localhost:9099');

      auth.onAuthStateChanged((user: FirebaseAuthTypes.User | null) => {
        if (user) {
          user
            .getIdTokenResult()
            .then(({ claims }) => onAuth({ _id: user.uid, claims }))
            .catch((e) => {
              const error =
                (e as AuthError).code === 'auth/network-request-failed'
                  ? new HttpError(HTTP_STATUS_CODE.SERVICE_UNAVAILABLE, 'Network Error')
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
    await auth.signInWithCustomToken(token);
  },

  signOut: async (): Promise<void> => auth.signOut(),
});
