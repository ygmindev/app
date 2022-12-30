import { MOBILE_WIDTH_THRESHOLD } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile.constants';
import type { UseIsMobileModel } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile.models';
import { useDimension } from '@lib/frontend/platform/hooks/useDimension/useDimension';

export const useIsMobile = (): UseIsMobileModel => {
  const { width } = useDimension();
  return width !== undefined && width < MOBILE_WIDTH_THRESHOLD;
};
