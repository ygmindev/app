import { AppProvider } from '@lib/frontend/app/providers/AppProvider/AppProvider';
import { AuthProvider } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider';
import { PortalProvider } from '@lib/frontend/core/components/Portal/Portal';
import type { FCModel } from '@lib/frontend/core/core.models';
import { QueryProvider } from '@lib/frontend/core/providers/QueryProvider/QueryProvider';
import { LocaleProvider } from '@lib/frontend/locale/providers/LocaleProvider/LocaleProvider';
import type { RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import { KeyboardProvider } from '@lib/frontend/root/providers/KeyboardProvider/KeyboardProvider';
import { store } from '@lib/frontend/root/stores/store/store';
import { StyleProvider } from '@lib/frontend/styling/providers/StyleProvider/StyleProvider';
import { TrackingProvider } from '@lib/frontend/tracking/providers/TrackingProvider/TrackingProvider';
import type { ComponentType } from 'react';
import { createElement, Suspense } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

const providers = [
  KeyboardProvider,
  AppProvider,
  TrackingProvider,
  AuthProvider,
  PortalProvider,
  LocaleProvider,
  StyleProvider,
  QueryProvider,
  Suspense,
].filter(Boolean) as Array<ComponentType>;

export const Root: FCModel<RootPropsModel> = ({ children, intialStore = store }) => (
  <ReduxProvider store={intialStore}>
    {providers.reduce((result, Provider) => createElement(Provider, {}, result), children)}
  </ReduxProvider>
);
