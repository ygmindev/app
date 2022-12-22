import { usePrevious } from '@lib/frontend/core/hooks/usePrevious/usePrevious';
import { _useActive } from '@lib/frontend/route/hooks/useActive/_useActive';
import type { UseActiveModel } from '@lib/frontend/route/hooks/useActive/useActive.models';

export const useActive: UseActiveModel = () => {
  const current = _useActive();
  const previous = usePrevious({ value: current });
  return { current, previous };
};
