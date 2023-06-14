import type { UseIsInitializedModel } from '#lib-frontend/app/hooks/useIsInitialized/useIsInitialized.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';

export const useIsInitialized = (): UseIsInitializedModel => {
  const currentUser = useStore((state) => state.user.currentUser);
  const { isInitialized: isTranslationInitialized } = useTranslation();
  return currentUser !== undefined && isTranslationInitialized;
};
