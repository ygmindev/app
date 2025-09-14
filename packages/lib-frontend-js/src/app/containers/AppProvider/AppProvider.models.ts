import { type PORTAL_ACTION_TYPE } from '@lib/frontend/app/containers/AppProvider/AppProvider.constants';
import { type ProviderPropsModel } from '@lib/frontend/core/core.models';
import { type Dispatch, type ReactNode } from 'react';

export type AppProviderPropsModel = ProviderPropsModel;

export type PortalsStateModel = Record<string, Array<{ name: string; node: ReactNode }>>;

export type PortalsActionModel =
  | {
      payload: { name: string; node: ReactNode; root: string };
      type: PORTAL_ACTION_TYPE.UPSERT_PORTAL;
    }
  | { payload: { name: string; root: string }; type: PORTAL_ACTION_TYPE.REMOVE_PORTAL };

export type PortalsContextModel = {
  dispatch: Dispatch<PortalsActionModel>;
  portals: PortalsStateModel;
};
