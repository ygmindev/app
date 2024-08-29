import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/_RouteProvider.models';
import { type NativeRouterProps } from 'react-router-native';
import { NativeRouter } from 'react-router-native';

export const _RouteProvider = composeComponent<_RouteProviderPropsModel, NativeRouterProps>({
  Component: NativeRouter,
});
