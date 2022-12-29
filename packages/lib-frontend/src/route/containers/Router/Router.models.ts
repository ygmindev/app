import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { PageModel } from '@lib/frontend/route/components/Page/Page.models';
import type { _RouteComponentModel } from '@lib/frontend/route/containers/Router/_Router.models';
import type { ComponentType } from 'react';

export interface RouterPropsModel {
  routes: Array<PageModel>;
}

export interface RouteComponentModel extends _RouteComponentModel {
  Layout?: ComponentType<ChildrenPropsModel>;
}
