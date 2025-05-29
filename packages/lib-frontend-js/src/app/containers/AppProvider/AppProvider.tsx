import {
  PORTAL_ACTION_TYPE,
  USE_DIMENSION_DELAY,
} from '@lib/frontend/app/containers/AppProvider/AppProvider.constants';
import {
  type AppProviderPropsModel,
  type PortalsActionModel,
  type PortalsContextModel,
  type PortalsStateModel,
} from '@lib/frontend/app/containers/AppProvider/AppProvider.models';
import { type FCModel } from '@lib/frontend/core/core.models';
import { useContainer } from '@lib/frontend/core/hooks/useContainer/useContainer';
import { display } from '@lib/frontend/core/utils/display/display';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { updateArray } from '@lib/shared/core/utils/updateArray/updateArray';
import { createContext, useEffect, useReducer } from 'react';

export const portalsReducer = (
  state: PortalsStateModel,
  action: PortalsActionModel,
): PortalsStateModel => {
  const { name, root } = action.payload;
  switch (action.type) {
    case PORTAL_ACTION_TYPE.UPSERT_PORTAL: {
      const list = state[root] ?? [];
      const updated = updateArray(
        list,
        (v) => v.name === name,
        () => ({ name, node: action.payload.node }),
        { isUpsert: true },
      );
      return { ...state, [root]: updated };
    }
    case PORTAL_ACTION_TYPE.REMOVE_PORTAL: {
      const list = state[root] ?? [];
      const filtered = list.filter((v) => v.name !== name);
      return { ...state, [root]: filtered };
    }
    default:
      return state;
  }
};

export const PortalContext = createContext<PortalsContextModel>({
  dispatch: () => null,
  portals: {},
});

export const AppProvider: FCModel<AppProviderPropsModel> = ({ children }) => {
  const [, dimensionSet] = useStore('app.dimension');
  const [portals, dispatch] = useReducer(portalsReducer, {});

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

  return <PortalContext.Provider value={{ dispatch, portals }}>{children}</PortalContext.Provider>;
};
