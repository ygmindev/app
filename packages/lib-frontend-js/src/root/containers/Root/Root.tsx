import { AppProvider } from '@lib/frontend/app/containers/AppProvider/AppProvider';
import { AuthProvider } from '@lib/frontend/auth/containers/AuthProvider/AuthProvider';
import { OAuthProvider } from '@lib/frontend/auth/containers/OAuthProvider/OAuthProvider';
import { AsyncBoundary } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { ContainerProvider } from '@lib/frontend/core/containers/ContainerProvider/ContainerProvider';
import { type FCModel } from '@lib/frontend/core/core.models';
import { QueryProvider } from '@lib/frontend/data/containers/QueryProvider/QueryProvider';
import { DevProvider } from '@lib/frontend/dev/containers/DevProvider/DevProvider';
import { LocaleProvider } from '@lib/frontend/locale/containers/LocaleProvider/LocaleProvider';
import { ContextProvider } from '@lib/frontend/root/containers/ContextProvider/ContextProvider';
import {
  ActionContext,
  DefaultStateContext,
  PersistedStateContext,
} from '@lib/frontend/root/containers/Root/context';
import { type RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import { useRootContext } from '@lib/frontend/root/hooks/useRootContext/useRootContext';
import { ROOT_REDUCERS } from '@lib/frontend/root/stores/rootStore.constants';
import { type RootStateModel } from '@lib/frontend/root/stores/rootStore.models';
import { Router } from '@lib/frontend/route/containers/Router/Router';
import { Store } from '@lib/frontend/state/utils/Store/Store';
import { StyleProvider } from '@lib/frontend/style/containers/StyleProvider/StyleProvider';
import { TrackingProvider } from '@lib/frontend/tracking/containers/TrackingProvider/TrackingProvider';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { QUERY } from '@lib/shared/query/query.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import { STATE } from '@lib/shared/state/state.constants';
import { type ReactElement, Suspense } from 'react';
import { cloneElement, useMemo } from 'react';

export const Root: FCModel<RootPropsModel> = ({ children, routes }) => {
  const context = useRootContext();
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
        <Router
          context={context?.[ROUTE]}
          routes={routes}
        />,
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
        process.env.NODE_ENV === 'development' && <DevProvider />,
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
