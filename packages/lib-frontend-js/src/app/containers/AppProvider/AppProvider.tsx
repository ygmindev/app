import { USE_DIMENSION_DELAY } from '@lib/frontend/app/containers/AppProvider/AppProvider.constants';
import {
  type AppProviderPropsModel,
  type PortalContextModel,
  type PortalsStateModel,
} from '@lib/frontend/app/containers/AppProvider/AppProvider.models';
import { type FCModel } from '@lib/frontend/core/core.models';
import { useContainer } from '@lib/frontend/core/hooks/useContainer/useContainer';
import { display } from '@lib/frontend/core/utils/display/display';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { createContext, useEffect, useState } from 'react';

export const portalContext = createContext<PortalContextModel>({
  portals: {},
  portalsSet: () => null,
});

export const AppProvider: FCModel<AppProviderPropsModel> = ({ children }) => {
  const [, dimensionSet] = useStore('app.dimension');
  const [portals, portalsSet] = useState<PortalsStateModel>({});
  const pubsub = useContainer(PubSub);

  const update = debounce(() => dimensionSet(display.getDimension()), {
    duration: USE_DIMENSION_DELAY,
  });

  useEffect(() => {
    update();
    display.subscribeResize(update);
    return () => {
      display.unsubscribeResize(update);
      pubsub.close();
    };
  }, []);

  return (
    <portalContext.Provider value={{ portals, portalsSet }}>{children}</portalContext.Provider>
  );
};
