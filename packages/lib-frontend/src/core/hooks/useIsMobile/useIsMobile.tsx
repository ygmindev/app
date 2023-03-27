import { MOBILE_WIDTH_THRESHOLD } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile.constants';
import type { UseIsMobileModel } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';

export const useIsMobile = (): UseIsMobileModel => {
  const { width } = useStore((state) => state.app.dimension);
  return width !== undefined && width < MOBILE_WIDTH_THRESHOLD;
};
