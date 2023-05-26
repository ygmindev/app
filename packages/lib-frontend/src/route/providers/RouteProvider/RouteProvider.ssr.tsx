import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/_RouteProvider.models';
import { _RouteProvider } from '@lib/frontend/route/providers/RouteProvider/_RouteProvider.ssr';
import type { RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/RouteProvider.models';
import type { RouteContextModel } from '@lib/frontend/route/route.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { createContext } from 'react';

export const RouteContext = createContext<RouteContextModel>({});

export const RouteProvider = composeComponent<RouteProviderPropsModel, _RouteProviderPropsModel>({
  Component: _RouteProvider,
});

process.env.APP_DEBUG && (RouteProvider.displayName = variableName(() => RouteProvider));
