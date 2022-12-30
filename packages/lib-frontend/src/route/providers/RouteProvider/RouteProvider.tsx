import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { _RouteProvider } from '@lib/frontend/route/providers/RouteProvider/_RouteProvider';
import type { _RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/_RouteProvider.models';
import type { RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/RouteProvider.models';

export const RouteProvider = composeComponent<RouteProviderPropsModel, _RouteProviderPropsModel>({
  getComponent: () => _RouteProvider,

  getProps: ({ children }) => ({ children }),
});
