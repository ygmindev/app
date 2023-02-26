import { AuthProvider } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider';
import type { FCModel } from '@lib/frontend/core/core.models';
import { ErrorProvider } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider';
import { ERROR_MODE } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider.constants';
import { QueryProvider } from '@lib/frontend/core/providers/QueryProvider/QueryProvider';
import { LocaleProvider } from '@lib/frontend/locale/providers/LocaleProvider/LocaleProvider';
import type { RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import { RootLayout } from '@lib/frontend/root/layouts/RootLayout/RootLayout';
import { RouteProvider } from '@lib/frontend/route/providers/RouteProvider/RouteProvider';
import { initialize } from '@lib/frontend/setup/utils/initialize/initialize';
import { StateProvider } from '@lib/frontend/state/providers/StateProvider/StateProvider';
import { StyleProvider } from '@lib/frontend/style/providers/StyleProvider/StyleProvider';
import { TrackingProvider } from '@lib/frontend/tracking/providers/TrackingProvider/TrackingProvider';
import { cloneElement, Suspense, useMemo } from 'react';

await initialize();

export const Root: FCModel<RootPropsModel> = ({ children, initialState, locale, route }) => {
  const providers = useMemo(
    () => [
      <RootLayout />,
      <RouteProvider value={route} />,
      <TrackingProvider />,
      <QueryProvider />,
      <AuthProvider />,
      <ErrorProvider value={{ mode: ERROR_MODE.NOTIFICATION }} />,
      <StyleProvider />,
      <LocaleProvider value={locale} />,
      <StateProvider value={initialState} />,
      <Suspense />, // to provider?
    ],
    [initialState],
  );

  return <>{providers.reduce((result, element) => cloneElement(element, {}, result), children)}</>;
};
