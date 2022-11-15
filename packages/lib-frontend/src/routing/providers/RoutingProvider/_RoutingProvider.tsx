import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _RoutingProviderPropsModel } from '@lib/frontend/routing/providers/RoutingProvider/_RoutingProvider.models';
import type { BrowserRouterProps } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export const _RoutingProvider = composeComponent<_RoutingProviderPropsModel, BrowserRouterProps>({
  Component: BrowserRouter,
  getProps: ({ children }) => ({ children }),
});
