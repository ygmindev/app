import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/_RouteProvider.models';
import type { BrowserRouterProps } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export const _RouteProvider = composeComponent<_RouteProviderPropsModel, BrowserRouterProps>({
  getComponent: () => BrowserRouter,

  getProps: ({ children, value }) => ({ children, location: value?.location || '' }),
});
