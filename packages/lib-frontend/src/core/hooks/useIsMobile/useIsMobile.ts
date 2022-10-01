import { MOBILE_WIDTH_THRESHOLD } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile.constants';
import { useDimension } from '@lib/frontend/platform/hooks/useDimension/useDimension';

export const useIsMobile = (): boolean => {
  const { width } = useDimension();
  return width !== undefined && width < MOBILE_WIDTH_THRESHOLD;
};
