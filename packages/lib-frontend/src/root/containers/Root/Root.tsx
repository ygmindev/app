import { AppProvider } from '@lib/frontend/app/containers/AppProvider/AppProvider';
import { AuthProvider } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider';
import type { FCModel } from '@lib/frontend/core/core.models';
import { ErrorProvider } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider';
import { ERROR_MODE } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider.constants';
import { QueryProvider } from '@lib/frontend/core/providers/QueryProvider/QueryProvider';
import { LocaleProvider } from '@lib/frontend/locale/providers/LocaleProvider/LocaleProvider';
import type { RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import { RootLayout } from '@lib/frontend/root/layouts/RootLayout/RootLayout';
import { ROOT_REDUCERS } from '@lib/frontend/root/stores/rootStore.constants';
import type {
  RootActionsModel,
  RootActionsParamsModel,
  RootStateModel,
} from '@lib/frontend/root/stores/rootStore.models';
import { RouteProvider } from '@lib/frontend/route/providers/RouteProvider/RouteProvider';
import { Store } from '@lib/frontend/state/utils/Store/Store';
import { StyleProvider } from '@lib/frontend/style/providers/StyleProvider/StyleProvider';
import { TrackingProvider } from '@lib/frontend/tracking/providers/TrackingProvider/TrackingProvider';
import type { ReactElement } from 'react';
import { cloneElement, createContext, Suspense, useMemo } from 'react';

export const actionContext = createContext<RootActionsModel | undefined>(undefined);

export const Root: FCModel<RootPropsModel> = ({ children, context }) => {
  const _store = useMemo(
    () =>
      new Store<Array<keyof RootStateModel>, RootStateModel, RootActionsParamsModel>({
        cookies: context?.state?.cookies,
        initialState: context?.state?.initialState,
        reducers: ROOT_REDUCERS,
      }),
    [context?.state?.cookies, context?.state?.initialState],
  );
  const _providers = [
    <RootLayout />,
    <RouteProvider value={context?.route} />,
    <TrackingProvider />,
    <QueryProvider />,
    <AuthProvider />,
    <ErrorProvider value={{ mode: ERROR_MODE.NOTIFICATION }} />,
    <StyleProvider />,
    <LocaleProvider value={context?.locale} />,
    <AppProvider />,
    <_store.Provider value={{ ...context?.state, actionContext, store: _store }} />,
    <Suspense />, // to provider?
  ].filter(Boolean) as Array<ReactElement>;

  return <>{_providers.reduce((result, element) => cloneElement(element, {}, result), children)}</>;
};
