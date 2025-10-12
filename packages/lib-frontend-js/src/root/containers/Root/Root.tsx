import { AppProvider } from '@lib/frontend/app/containers/AppProvider/AppProvider';
import { AuthProvider } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider';
import { OAuthProvider } from '@lib/frontend/auth/providers/OAuthProvider/OAuthProvider';
import { AsyncBoundary } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { ContainerProvider } from '@lib/frontend/core/containers/ContainerProvider/ContainerProvider';
import { type FCModel } from '@lib/frontend/core/core.models';
import { QueryProvider } from '@lib/frontend/data/providers/QueryProvider/QueryProvider';
import { LocaleProvider } from '@lib/frontend/locale/providers/LocaleProvider/LocaleProvider';
import {
  ActionContext,
  DefaultStateContext,
  PersistedStateContext,
} from '@lib/frontend/root/containers/Root/context';
import { type RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import { ContextProvider } from '@lib/frontend/root/providers/ContextProvider/ContextProvider';
import { ROOT_REDUCERS } from '@lib/frontend/root/stores/rootStore.constants';
import { type RootStateModel } from '@lib/frontend/root/stores/rootStore.models';
import { Store } from '@lib/frontend/state/utils/Store/Store';
import { StyleProvider } from '@lib/frontend/style/providers/StyleProvider/StyleProvider';
import { TrackingProvider } from '@lib/frontend/tracking/providers/TrackingProvider/TrackingProvider';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { QUERY } from '@lib/shared/query/query.constants';
import { STATE } from '@lib/shared/state/state.constants';
import { type ReactElement, Suspense } from 'react';
import { cloneElement, useMemo } from 'react';

export const Root: FCModel<RootPropsModel> = ({ children, context }) => {
  const store = useMemo(
    () =>
      new Store<RootStateModel>({
        cookies: context?.[STATE]?.cookies,
        initialState: context?.[STATE]?.initialState,
        reducers: ROOT_REDUCERS,
      }),
    [context?.[STATE]?.cookies, context?.[STATE]?.initialState],
  );
  const providers = useMemo<Array<ReactElement>>(
    () =>
      filterNil([
        <AsyncBoundary />,
        <ContextProvider value={context} />,
        <TrackingProvider />,
        <QueryProvider value={context?.[QUERY]} />,
        <OAuthProvider />,
        <AuthProvider />,
        <StyleProvider />,
        <LocaleProvider value={context?.[LOCALE]} />,
        <AppProvider />,
        <ContainerProvider />,
        <store.Provider
          value={{
            ...context?.[STATE],
            actionContext: ActionContext,
            defaultStateContext: DefaultStateContext,
            persistedStateContext: PersistedStateContext,
            store,
          }}
        />,
        <Suspense />,
      ]),
    [context],
  );
  return <>{providers.reduce((result, element) => cloneElement(element, {}, result), children)}</>;
};
