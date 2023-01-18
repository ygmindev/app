import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { lazy } from '@lib/frontend/core/utils/lazy/lazy';
import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';
import type { _RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/_RouteProvider.models';
import type { RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/RouteProvider.models';
import type { RouteContextModel } from '@lib/frontend/route/route.models';
import { createContext } from 'react';

const { _RouteProvider: _RouteProviderClient } = lazy(
  () => import('@lib/frontend/route/providers/RouteProvider/_RouteProvider'),
);
const { _RouteProvider: _RouteProviderServer } = lazy(
  () => import('@lib/frontend/route/providers/RouteProvider/_RouteProvider.server'),
);

export const RouteContext = createContext<RouteContextModel>({});

export const RouteProvider = composeComponent<RouteProviderPropsModel, _RouteProviderPropsModel>({
  getComponent: () => (isSsr ? _RouteProviderServer : _RouteProviderClient),
});
