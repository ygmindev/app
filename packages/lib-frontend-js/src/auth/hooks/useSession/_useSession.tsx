import { _auth } from '@lib/frontend/auth/hooks/useAuth/_useAuth';
import { type _UseSessionModel } from '@lib/frontend/auth/hooks/useSession/_useSession.models';
import { signInWithCustomToken, signOut } from 'firebase/auth';

export const _useSession = (): _UseSessionModel => ({
  refreshToken: async (): Promise<string | null> => _auth.currentUser?.getIdToken() ?? null,

  signInWithToken: async (token: string): Promise<void> => {
    await signInWithCustomToken(_auth, token);
  },

  signOut: async (): Promise<void> => signOut(_auth),
});
