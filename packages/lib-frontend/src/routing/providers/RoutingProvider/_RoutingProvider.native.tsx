import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _RoutingProviderPropsModel } from '@lib/frontend/routing/providers/RoutingProvider/_RoutingProvider.models';
import type { NativeRouterProps } from 'react-router-native';
import { NativeRouter } from 'react-router-native';

export const _RoutingProvider = composeComponent<_RoutingProviderPropsModel, NativeRouterProps>({
  Component: NativeRouter,
  getProps: ({ children }) => ({ children }),
});
