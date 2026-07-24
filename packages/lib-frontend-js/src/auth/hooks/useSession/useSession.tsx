import { _useSession } from '@lib/frontend/auth/hooks/useSession/_useSession';
import { type UseSessionModel } from '@lib/frontend/auth/hooks/useSession/useSession.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { OfflineError } from '@lib/shared/http/errors/OfflineError/OfflineError';
import { useCallback } from 'react';

export const useSession = (): UseSessionModel => {
  const session = _useSession();
  const [isOffline, isOfflineSet] = useStore('app.isOffline');

  const authenticate = useCallback(
    async (callback: () => Promise<void>): Promise<void> => {
      try {
        await callback();
      } catch (e) {
        e instanceof OfflineError && !isOffline && isOfflineSet(true);
        throw e;
      }
    },
    [isOffline, isOfflineSet],
  );

  return {
    ...session,
    signInAnonymously: async () => {
      await authenticate(async () => {
        await session.signInAnonymously();
      });
    },
    signInWithToken: async (token) => {
      await authenticate(async () => {
        await session.signInWithToken(token);
      });
    },
    signOut: async () => {
      await authenticate(async () => {
        await session.signOut();
      });
    },
  };
};
