import type { _UseSessionModel } from '@lib/frontend/auth/hooks/useSession/_useSession.models';
import { NetworkError } from '@lib/shared/core/errors/NetworkError/NetworkError';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import type { FirebaseAuthTypes } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import type { AuthError } from 'firebase/auth';

const REACT_APP_FIREBASE_USE_EMULATOR = getEnv('REACT_APP_FIREBASE_USE_EMULATOR', false);

let _auth: FirebaseAuthTypes.Module;

export const _useSession = (): _UseSessionModel => ({
  getToken: async (): Promise<string | null> => {
    const { currentUser } = _auth;
    return currentUser && currentUser.getIdToken(true);
  },

  initialize: async (onAuth): Promise<void> => {
    if (process.env.NODE_ENV !== 'test') {
      _auth = auth();
      REACT_APP_FIREBASE_USE_EMULATOR && _auth.useEmulator('http://localhost:9099');

      _auth.onAuthStateChanged(async (user: FirebaseAuthTypes.User | null) => {
        if (user) {
          try {
            const { claims } = await user.getIdTokenResult();
            onAuth({ _id: user.uid, claims });
          } catch (e) {
            if ((e as AuthError).code === 'auth/network-request-failed') {
              throw new NetworkError();
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

  signInWithToken: async (token: string): Promise<unknown> => _auth.signInWithCustomToken(token),

  signOut: async (): Promise<unknown> => _auth.signOut(),
});
