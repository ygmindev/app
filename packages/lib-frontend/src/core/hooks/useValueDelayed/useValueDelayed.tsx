import { useChange } from '@lib/frontend/core/hooks/useChange/useChange';
import {
  type UseValueDelayedModel,
  type UseValueDelayedParamsModel,
} from '@lib/frontend/core/hooks/useValueDelayed/useValueDelayed.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { useState } from 'react';

export const useValueDelayed = <TType,>(
  ...[value, delay]: UseValueDelayedParamsModel<TType>
): UseValueDelayedModel<TType> => {
  const theme = useTheme();
  const [valueDelayed, valueDelayedSet] = useState<TType | undefined>(value);
  useChange(value, () => {
    void sleep(delay ?? theme.animation.effect).then(() => valueDelayedSet(value));
  });
  return valueDelayed;
};
