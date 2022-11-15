import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { PagePropsModel } from '@lib/frontend/routing/components/Page/Page.models';
import type { _RouteComponentModel } from '@lib/frontend/routing/containers/Router/_Router.models';
import type { ComponentType } from 'react';

export interface RouterPropsModel {
  routes: Array<PagePropsModel>;
}

export interface RouteComponentModel extends _RouteComponentModel {
  Layout?: ComponentType<WithChildrenPropsModel>;
}
