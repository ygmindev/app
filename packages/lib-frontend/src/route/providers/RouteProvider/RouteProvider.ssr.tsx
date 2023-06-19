import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
import type { _RouteProviderPropsModel } from '#lib-frontend/route/providers/RouteProvider/_RouteProvider.models';
import { _RouteProvider } from '#lib-frontend/route/providers/RouteProvider/_RouteProvider.ssr';
import type { RouteProviderPropsModel } from '#lib-frontend/route/providers/RouteProvider/RouteProvider.models';
import { variableName } from '#lib-shared/core/utils/variableName/variableName';

export const RouteProvider = composeComponent<RouteProviderPropsModel, _RouteProviderPropsModel>({
  Component: _RouteProvider,
});

process.env.APP_DEBUG && (RouteProvider.displayName = variableName({ RouteProvider }));
