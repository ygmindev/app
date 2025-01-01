import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/_RouteProvider.models';
import { type BrowserRouterProps } from 'react-router';
import { BrowserRouter } from 'react-router';

export const _RouteProvider = composeComponent<_RouteProviderPropsModel, BrowserRouterProps>({
  Component: BrowserRouter,

  getProps: ({ children, value }) => ({
    basename: value?.basename,
    children,
  }),
});
