import { _auth } from '@lib/frontend/auth/hooks/useAuth/_useAuth.native';
import { type _UseSessionModel } from '@lib/frontend/auth/hooks/useSession/_useSession.models';

export const _useSession = (): _UseSessionModel => ({
  refreshToken: async (): Promise<string | null> => _auth.currentUser?.getIdToken() ?? null,

  signInWithToken: async (token: string): Promise<void> => {
    await _auth.signInWithCustomToken(token);
  },

  signOut: async (): Promise<void> => _auth.signOut(),
});
