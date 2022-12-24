import type { FCModel } from '@lib/frontend/core/core.models';
import { ROOT_REDUCERS } from '@lib/frontend/root/stores/rootStore.constants';
import type { RootActionsModel } from '@lib/frontend/root/stores/rootStore.models';
import { _StateProvider } from '@lib/frontend/state/providers/StateProvider/_StateProvider';
import type { StateProviderPropsModel } from '@lib/frontend/state/providers/StateProvider/StateProvider.models';
import { createContext } from 'react';

export const actionContext = createContext<RootActionsModel | undefined>(undefined);

export const StateProvider: FCModel<StateProviderPropsModel> = ({ children, value }) => (
  <_StateProvider
    actionContext={actionContext}
    value={{ initialState: value?.initialState, reducers: ROOT_REDUCERS }}>
    {children}
  </_StateProvider>
);
