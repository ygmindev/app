import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { lazy } from '@lib/frontend/core/utils/lazy/lazy';
import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';
import type { _RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/_RouteProvider.models';
import type { RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/RouteProvider.models';
import type { RouteContextModel } from '@lib/frontend/route/route.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { createContext } from 'react';

const { _RouteProvider: _RouteProviderFrontend } = lazy(
  () => import('@lib/frontend/route/providers/RouteProvider/_RouteProvider'),
);
const { _RouteProvider: _RouteProviderBackend } = lazy(
  () => import('@lib/frontend/route/providers/RouteProvider/_RouteProvider.node'),
);

export const RouteContext = createContext<RouteContextModel>({});

export const _RouteProvider = composeComponent<RouteProviderPropsModel, _RouteProviderPropsModel>({
  Component: isSsr ? _RouteProviderBackend : _RouteProviderFrontend,
});

export const RouteProvider = composeComponent<RouteProviderPropsModel, _RouteProviderPropsModel>({
  Component: _RouteProvider,
});

process.env.APP_DEBUG && (RouteProvider.displayName = variableName(() => RouteProvider));
