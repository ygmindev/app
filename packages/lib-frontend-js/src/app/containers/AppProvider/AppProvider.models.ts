import { type ProviderPropsModel } from '@lib/frontend/core/core.models';
import { type ReactNode } from 'react';

export type AppProviderPropsModel = ProviderPropsModel;

export type PortalsStateModel = Record<string, Array<{ name: string; node: ReactNode }>>;

export type PortalContextModel = {
  portals: PortalsStateModel;
  portalsSet(value: PortalsStateModel): void;
};
