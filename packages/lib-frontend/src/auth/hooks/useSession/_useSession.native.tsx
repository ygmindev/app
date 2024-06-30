import {
  type _UseSessionModel,
  type _UseSessionParamsModel,
} from '@lib/frontend/auth/hooks/useSession/_useSession.models';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { type FirebaseAuthTypes } from '@react-native-firebase/auth';
import firebaseAuth from '@react-native-firebase/auth';
import { type AuthError } from 'firebase/auth';

let auth: FirebaseAuthTypes.Module;

export const _useSession = ({ onError }: _UseSessionParamsModel): _UseSessionModel => ({
  initialize: async ({ onAuthenticate, onTokenRefresh }): Promise<void> => {
    auth = firebaseAuth();
    // process.env.APP_FIREBASE_USE_EMULATOR && auth.useEmulator('http://localhost:9099');
    if (auth) {
      auth.onIdTokenChanged(
        (user: FirebaseAuthTypes.User | null) => void user?.getIdToken(true).then(onTokenRefresh),
      );

      auth.onAuthStateChanged((user: FirebaseAuthTypes.User | null) => {
        user
          ? user
              .getIdTokenResult(true)
              .then(({ claims, token }) => onAuthenticate({ _id: user.uid, claims }, token))
              .catch((e) => {
                const error =
                  (e as AuthError).code === 'auth/network-request-failed'
                    ? new HttpError(HTTP_STATUS_CODE.SERVICE_UNAVAILABLE, 'Network Error')
                    : (e as Error);
                onError && onError(error);
              })
          : void onAuthenticate(null);
      });
    }
  },

  refreshToken: async (): Promise<string | null> => auth.currentUser?.getIdToken() ?? null,

  signInWithToken: async (token: string): Promise<void> => {
    await auth.signInWithCustomToken(token);
  },

  signOut: async (): Promise<void> => auth.signOut(),
});
