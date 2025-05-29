import {
  type RootActionsModel,
  type RootDefaultStateModel,
} from '@lib/frontend/root/stores/rootStore.models';
import { createContext } from 'react';

export const ActionContext = createContext<RootActionsModel | undefined>(undefined);

export const DefaultStateContext = createContext<RootDefaultStateModel | undefined>(undefined);

export const PersistedStateContext = createContext<RootDefaultStateModel | undefined>(undefined);
