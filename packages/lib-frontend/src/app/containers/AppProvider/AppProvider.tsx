import { useEffect } from 'react';

import { USE_DIMENSION_DELAY } from '#lib-frontend/app/containers/AppProvider/AppProvider.constants';
import type { AppProviderPropsModel } from '#lib-frontend/app/containers/AppProvider/AppProvider.models';
import type { SFCModel } from '#lib-frontend/core/core.models';
import { display } from '#lib-frontend/core/utils/display/display';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import type { CallableModel } from '#lib-shared/core/core.models';
import { debounce } from '#lib-shared/core/utils/debounce/debounce';

export const AppProvider: SFCModel<AppProviderPropsModel> = ({ children }) => {
  const actions = useActions();

  const update: CallableModel = debounce(() => actions?.app.dimensionSet(display.getDimension()), {
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
