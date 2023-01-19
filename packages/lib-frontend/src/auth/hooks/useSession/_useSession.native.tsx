import type {
  _UseSessionModel,
  _UseSessionParamsModel,
} from '@lib/frontend/auth/hooks/useSession/_useSession.models';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';
import type { FirebaseAuthTypes } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import type { AuthError } from 'firebase/auth';

let _auth: FirebaseAuthTypes.Module;

export const _useSession = ({ onError }: _UseSessionParamsModel): _UseSessionModel => ({
  getToken: async (): Promise<string | null> => {
    const { currentUser } = _auth;
    return currentUser && currentUser.getIdToken(true);
  },

  initialize: async (onAuth): Promise<void> => {
    if (process.env.NODE_ENV !== 'test') {
      _auth = auth();
      process.env.APP_FIREBASE_USE_EMULATOR && _auth.useEmulator('http://localhost:9099');

      _auth.onAuthStateChanged(async (user: FirebaseAuthTypes.User | null) => {
        if (user) {
          try {
            const { claims } = await user.getIdTokenResult();
            onAuth({ _id: user.uid, claims });
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
    await _auth.signInWithCustomToken(token);
  },

  signOut: async (): Promise<void> => _auth.signOut(),
});
