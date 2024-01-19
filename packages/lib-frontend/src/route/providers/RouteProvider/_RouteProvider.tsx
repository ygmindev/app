import { type BrowserRouterProps } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/_RouteProvider.models';

export const _RouteProvider = composeComponent<_RouteProviderPropsModel, BrowserRouterProps>({
  Component: BrowserRouter,

  getProps: ({ children, value }) => ({
    basename: value?.basename,
    children,
  }),
});
