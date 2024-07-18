import {
  type RootActionsModel,
  type RootDefaultStateModel,
} from '@lib/frontend/root/stores/rootStore.models';
import { createContext } from 'react';

export const actionContext = createContext<RootActionsModel | undefined>(undefined);

export const defaultStateContext = createContext<RootDefaultStateModel | undefined>(undefined);

export const persistedStateContext = createContext<RootDefaultStateModel | undefined>(undefined);
