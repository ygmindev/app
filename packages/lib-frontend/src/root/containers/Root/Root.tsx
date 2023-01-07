import '@lib/frontend/core/utils/polyfill/polyfill';

import { AuthProvider } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider';
import { ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary';
import type { FCModel } from '@lib/frontend/core/core.models';
import { QueryProvider } from '@lib/frontend/core/providers/QueryProvider/QueryProvider';
import { LocaleProvider } from '@lib/frontend/locale/providers/LocaleProvider/LocaleProvider';
import type { RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import { RouteProvider } from '@lib/frontend/route/providers/RouteProvider/RouteProvider';
import { StateProvider } from '@lib/frontend/state/providers/StateProvider/StateProvider';
import { StyleProvider } from '@lib/frontend/style/providers/StyleProvider/StyleProvider';
import { cloneElement, Suspense, useMemo } from 'react';

export const Root: FCModel<RootPropsModel> = ({ children, initialState, location }) => {
  const providers = useMemo(
    () => [
      <RouteProvider value={location} />,
      // <TrackingProvider />,
      <AuthProvider />,
      <LocaleProvider />,
      <StyleProvider />,
      <QueryProvider />,
      <ErrorBoundary />,
      <StateProvider value={initialState} />,
      <Suspense />, // TODO: to provider?
    ],
    [initialState],
  );

  return <>{providers.reduce((result, element) => cloneElement(element, {}, result), children)}</>;
};
