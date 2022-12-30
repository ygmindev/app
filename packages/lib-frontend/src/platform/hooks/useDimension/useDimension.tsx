import { display } from '@lib/frontend/core/utils/display/display';
import { USE_DIMENSION_DELAY } from '@lib/frontend/platform/hooks/useDimension/useDimension.constants';
import type { UseDimensionModel } from '@lib/frontend/platform/hooks/useDimension/useDimension.models';
import type { DimensionModel } from '@lib/frontend/platform/platform.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { useState } from 'react';

export const useDimension = (): UseDimensionModel => {
  const [dimension, setDimension] = useState<DimensionModel>(display.getDimension());
  display.useLayoutEffect(() => {
    const update = (): CallableModel =>
      debounce({
        callback: () => setDimension(display.getDimension()),
        duration: USE_DIMENSION_DELAY,
      });
    display.subscribeResize(update);
    update();
    return () => {
      display.unsubscribeResize(update);
    };
  }, []);
  return dimension;
};
