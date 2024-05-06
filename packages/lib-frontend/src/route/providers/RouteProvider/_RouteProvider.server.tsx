import { resolvePath } from 'react-router';
import { type StaticRouterProps } from 'react-router-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/_RouteProvider.models';

export const _RouteProvider = composeComponent<_RouteProviderPropsModel, StaticRouterProps>({
  Component: StaticRouter,

  getProps: ({ children, value }) => ({
    children,
    location: value?.location?.pathname ? resolvePath(value?.location?.pathname) : '',
  }),
});
