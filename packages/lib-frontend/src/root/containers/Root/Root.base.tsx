import { AppProvider } from '@lib/frontend/app/containers/AppProvider/AppProvider';
import { AuthProvider } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider';
import { AsyncBoundary } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { type FCModel } from '@lib/frontend/core/core.models';
import { QueryProvider } from '@lib/frontend/data/providers/QueryProvider/QueryProvider';
import { LocaleProvider } from '@lib/frontend/locale/providers/LocaleProvider/LocaleProvider';
import { type RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import { ContextProvider } from '@lib/frontend/root/providers/ContextProvider/ContextProvider';
import { ROOT_REDUCERS } from '@lib/frontend/root/stores/rootStore.constants';
import {
  type RootActionsModel,
  type RootActionsParamsModel,
  type RootDefaultStateModel,
  type RootStateModel,
} from '@lib/frontend/root/stores/rootStore.models';
import { Store } from '@lib/frontend/state/utils/Store/Store';
import { StyleProvider } from '@lib/frontend/style/providers/StyleProvider/StyleProvider';
import { TrackingProvider } from '@lib/frontend/tracking/providers/TrackingProvider/TrackingProvider';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { type ReactElement, Suspense } from 'react';
import { cloneElement, createContext, useMemo } from 'react';

export const actionContext = createContext<RootActionsModel | undefined>(undefined);

export const defaultStateContext = createContext<RootDefaultStateModel | undefined>(undefined);

export const persistedStateContext = createContext<RootDefaultStateModel | undefined>(undefined);

export const Root: FCModel<RootPropsModel> = ({ additionalProviders, children, context }) => {
  const store = useMemo(
    () =>
      new Store<Array<keyof RootStateModel>, RootStateModel, RootActionsParamsModel>({
        cookies: context?.state?.cookies,
        initialState: context?.state?.initialState,
        reducers: ROOT_REDUCERS,
      }),
    [context?.state?.cookies, context?.state?.initialState],
  );
  const providers = useMemo<Array<ReactElement>>(
    () =>
      filterNil([
        ...(additionalProviders ?? []),
        <AsyncBoundary />,
        <ContextProvider value={context} />,
        <TrackingProvider />,
        <QueryProvider value={context?.query} />,
        <AuthProvider />,
        <StyleProvider />,
        <LocaleProvider value={context?.locale} />,
        <AppProvider />,
        <store.Provider
          value={{
            ...context?.state,
            actionContext,
            defaultStateContext,
            persistedStateContext,
            store,
          }}
        />,
        <Suspense />,
      ]),
    [additionalProviders, context],
  );
  return <>{providers.reduce((result, element) => cloneElement(element, {}, result), children)}</>;
};
