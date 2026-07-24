import { _auth } from '@lib/frontend/auth/hooks/useAuth/_useAuth';
import { type _UseSessionModel } from '@lib/frontend/auth/hooks/useSession/_useSession.models';
import { OfflineError } from '@lib/shared/http/errors/OfflineError/OfflineError';
import { signInWithCustomToken, signOut, signInAnonymously, type AuthError } from 'firebase/auth';

const authenticate = async (callback: () => Promise<void>): Promise<void> => {
  try {
    await callback();
  } catch (e) {
    throw (e as AuthError).code === 'auth/network-request-failed'
      ? new OfflineError()
      : (e as Error);
  }
};

export const _useSession = (): _UseSessionModel => ({
  isAnonymous: () => _auth.currentUser?.isAnonymous ?? false,

  refreshToken: async (): Promise<string | null> => _auth.currentUser?.getIdToken() ?? null,

  signInAnonymously: async (): Promise<void> => {
    await authenticate(async () => {
      await signInAnonymously(_auth);
    });
  },

  signInWithToken: async (token: string): Promise<void> => {
    await authenticate(async () => {
      await signInWithCustomToken(_auth, token);
    });
  },

  signOut: async (): Promise<void> => {
    await authenticate(async () => {
      await signOut(_auth);
    });
  },

  userId: () => _auth.currentUser?.uid ?? null,
});
