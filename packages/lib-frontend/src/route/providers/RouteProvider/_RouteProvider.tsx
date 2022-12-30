import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _RouteProviderPropsModel } from '@lib/frontend/route/providers/RouteProvider/_RouteProvider.models';
import { Fragment } from 'react';

export const _RouteProvider = composeComponent<_RouteProviderPropsModel, ChildrenPropsModel>({
  getComponent: () => Fragment,
});
