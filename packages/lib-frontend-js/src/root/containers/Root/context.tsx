import {
  type RootReducersModel,
  type RootStateModel,
  type RootActionsModel,
  type RootDefaultStateModel,
} from '@lib/frontend/root/stores/rootStore.models';
import { type StoreModel } from '@lib/frontend/state/utils/Store/Store.models';
import { createContext } from 'react';

export const ActionContext = createContext<RootActionsModel | undefined>(undefined);

export const DefaultStateContext = createContext<RootDefaultStateModel | undefined>(undefined);

export const PersistedStateContext = createContext<RootDefaultStateModel | undefined>(undefined);

export const StoreContext = createContext<
  StoreModel<RootStateModel, RootReducersModel> | undefined
>(undefined);
