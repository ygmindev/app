// import { AppProvider } from '@lib/frontend/app/providers/AppProvider/AppProvider';
import { AuthProvider } from '@lib/frontend/auth/providers/AuthProvider/AuthProvider';
import { ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary';
import { PortalProvider } from '@lib/frontend/core/components/Portal/Portal';
import type { FCModel } from '@lib/frontend/core/core.models';
import { QueryProvider } from '@lib/frontend/core/providers/QueryProvider/QueryProvider';
import { LocaleProvider } from '@lib/frontend/locale/providers/LocaleProvider/LocaleProvider';
import { NotificationProvider } from '@lib/frontend/notification/providers/NotificationProvider/NotificationProvider';
import type { RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import { KeyboardProvider } from '@lib/frontend/root/providers/KeyboardProvider/KeyboardProvider';
import { RoutingProvider } from '@lib/frontend/routing/providers/RoutingProvider/RoutingProvider';
import { StyleProvider } from '@lib/frontend/style/providers/StyleProvider/StyleProvider';
import { TrackingProvider } from '@lib/frontend/tracking/providers/TrackingProvider/TrackingProvider';
import type { ComponentType } from 'react';
import { createElement, Suspense } from 'react';

const providers = [
  RoutingProvider,
  KeyboardProvider,
  // AppProvider,
  TrackingProvider,
  AuthProvider,
  LocaleProvider,
  ErrorBoundary,
  NotificationProvider,
  StyleProvider,
  QueryProvider,
  PortalProvider,
  Suspense,
].filter(Boolean) as Array<ComponentType>;

export const Root: FCModel<RootPropsModel> = ({ children, intialStore = {} }) => (
  <>{providers.reduce((result, Provider) => createElement(Provider, {}, result), children)}</>
);
