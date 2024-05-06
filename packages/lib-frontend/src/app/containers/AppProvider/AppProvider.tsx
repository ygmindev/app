import { USE_DIMENSION_DELAY } from '@lib/frontend/app/containers/AppProvider/AppProvider.constants';
import { type AppProviderPropsModel } from '@lib/frontend/app/containers/AppProvider/AppProvider.models';
import { type FCModel } from '@lib/frontend/core/core.models';
import { display } from '@lib/frontend/core/utils/display/display';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { useEffect } from 'react';

export const AppProvider: FCModel<AppProviderPropsModel> = ({ children }) => {
  const [, dimensionSet] = useStore('app.dimension');

  const update = debounce(() => dimensionSet(display.getDimension()), {
    duration: USE_DIMENSION_DELAY,
  });

  useEffect(() => {
    update();
    display.subscribeResize(update);
    return () => {
      display.unsubscribeResize(update);
    };
  }, []);

  return <>{children}</>;
};
