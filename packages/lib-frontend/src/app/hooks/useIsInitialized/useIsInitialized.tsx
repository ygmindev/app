import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';

export const useIsInitialized = (): boolean => {
  const currentUser = useStore((state) => state.user.currentUser);
  const { isInitialized: isTranslationInitialized } = useTranslation();
  return currentUser !== undefined && isTranslationInitialized;
};
