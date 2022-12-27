import { AuthProvider } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider';
import type { FCModel } from '@lib/frontend/core/core.models';
import { QueryProvider } from '@lib/frontend/core/providers/QueryProvider/QueryProvider';
import { LocaleProvider } from '@lib/frontend/locale/providers/LocaleProvider/LocaleProvider';
import type { RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import { KeyboardProvider } from '@lib/frontend/root/providers/KeyboardProvider/KeyboardProvider';
import { RouteProvider } from '@lib/frontend/route/providers/RouteProvider/RouteProvider';
import { StateProvider } from '@lib/frontend/state/providers/StateProvider/StateProvider';
import { StyleProvider } from '@lib/frontend/style/providers/StyleProvider/StyleProvider';
import { TrackingProvider } from '@lib/frontend/tracking/providers/TrackingProvider/TrackingProvider';
import { cloneElement, useMemo } from 'react';

export const Root: FCModel<RootPropsModel> = ({ children, initialState }) => {
  const providers = useMemo(
    () => [
      <RouteProvider />,
      <KeyboardProvider />,
      <TrackingProvider />,
      <AuthProvider />,
      <LocaleProvider />,
      <StyleProvider />,
      <QueryProvider />,
      <StateProvider value={{ initialState }} />,
    ],
    [initialState],
  );

  return <>{providers.reduce((result, element) => cloneElement(element, {}, result), children)}</>;
};
