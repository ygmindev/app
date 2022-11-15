import type { RouteComponentModel } from '@lib/frontend/routing/containers/Router/Router.models';
import type { RouteModel } from '@lib/frontend/routing/routing.models';
import type { ReactElement } from 'react';

export interface _RouterPropsModel {
  routes: Array<_RouteComponentModel>;
}

export interface _RouteComponentModel extends RouteModel {
  element?: ReactElement;
  routes?: Array<RouteComponentModel>;
}
