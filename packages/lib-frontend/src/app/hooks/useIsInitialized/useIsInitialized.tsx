import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/user/stores/userReducer/userReducer';

export const useIsInitialized = (): boolean => {
  const { currentUser } = useStore();
  const { isInitialized: isTranslationInitialized } = useTranslation();
  return currentUser !== undefined && isTranslationInitialized;
};
