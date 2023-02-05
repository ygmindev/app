import type { ProviderPropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/_RouteProvider.models';
import { RouteContext } from '@lib/frontend/route/providers/RouteProvider/RouteProvider';
import type { RouteContextModel } from '@lib/frontend/route/route.models';
import type { RequiredModel } from '@lib/shared/core/core.models';
import { StaticRouter } from 'react-router-dom/server';

export const _RouteProvider = composeComponent<
  _RouteProviderPropsModel,
  RequiredModel<ProviderPropsModel<RouteContextModel>>
>({
  Component: RouteContext.Provider,

  getProps: ({ children, value }) => ({
    children: <StaticRouter location={value?.location || ''}>{children}</StaticRouter>,
    value: value?.context || {},
  }),
});
