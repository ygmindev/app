import { type ReactElement } from 'react';
import { cloneElement, createContext, useMemo } from 'react';

import { AppProvider } from '#lib-frontend/app/containers/AppProvider/AppProvider';
import { AuthProvider } from '#lib-frontend/auth/providers/AuthProvider/AuthProvider';
import { type FCModel } from '#lib-frontend/core/core.models';
import { ErrorProvider } from '#lib-frontend/core/providers/ErrorProvider/ErrorProvider';
import { ERROR_MODE } from '#lib-frontend/core/providers/ErrorProvider/ErrorProvider.constants';
import { QueryProvider } from '#lib-frontend/data/providers/QueryProvider/QueryProvider';
import { LocaleProvider } from '#lib-frontend/locale/providers/LocaleProvider/LocaleProvider';
import { type RootPropsModel } from '#lib-frontend/root/containers/Root/Root.models';
import { ContextProvider } from '#lib-frontend/root/providers/ContextProvider/ContextProvider';
import { ROOT_REDUCERS } from '#lib-frontend/root/stores/rootStore.constants';
import {
  type RootActionsModel,
  type RootActionsParamsModel,
  type RootStateModel,
} from '#lib-frontend/root/stores/rootStore.models';
import { Store } from '#lib-frontend/state/utils/Store/Store';
import { StyleProvider } from '#lib-frontend/style/providers/StyleProvider/StyleProvider';
import { TrackingProvider } from '#lib-frontend/tracking/providers/TrackingProvider/TrackingProvider';

export const actionContext = createContext<RootActionsModel | undefined>(undefined);

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
    () => [
      ...(additionalProviders || []),
      <ContextProvider value={context} />,
      <TrackingProvider />,
      <QueryProvider value={context?.query} />,
      <AuthProvider />,
      <ErrorProvider value={{ mode: ERROR_MODE.NOTIFICATION }} />,
      <StyleProvider />,
      <LocaleProvider value={context?.locale} />,
      <AppProvider />,
      <store.Provider value={{ ...context?.state, actionContext, store }} />,
    ],
    [additionalProviders, context],
  );

  return <>{providers.reduce((result, element) => cloneElement(element, {}, result), children)}</>;
};
