import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { lazy } from '@lib/frontend/core/utils/lazy/lazy';
import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';
import type { _RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/_RouteProvider.models';
import type { BrowserRouterProps } from 'react-router-dom';
import type { StaticRouterProps } from 'react-router-dom/server';

const { BrowserRouter } = lazy(() => import('react-router-dom'));
const { StaticRouter } = lazy(() => import('react-router-dom/server'));

export const _RouteProvider = composeComponent<
  _RouteProviderPropsModel,
  BrowserRouterProps & StaticRouterProps
>({
  getComponent: () => (isSsr ? StaticRouter : BrowserRouter),

  getProps: ({ children, value }) => ({ children, location: value || '' }),
});
