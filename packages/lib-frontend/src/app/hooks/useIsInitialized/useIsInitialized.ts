import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';

export const useIsInitialized = (): boolean => {
  const user = useSelector((state) => state.user.currentUser);
  const { isInitialized: isTranslationInitialized } = useTranslation();
  return user !== undefined && isTranslationInitialized;
};
