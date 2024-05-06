import { type NativeRouterProps } from 'react-router-native';
import { NativeRouter } from 'react-router-native';

import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/_RouteProvider.models';

export const _RouteProvider = composeComponent<_RouteProviderPropsModel, NativeRouterProps>({
  Component: NativeRouter,
});
