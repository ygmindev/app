import type { RouteComponentModel } from '@lib/frontend/route/containers/Router/Router.models';
import type { RouteModel } from '@lib/frontend/route/route.models';
import type { ReactElement } from 'react';

export interface _RouterPropsModel {
  routes: Array<_RouteComponentModel>;
}

export interface _RouteComponentModel extends RouteModel {
  element?: ReactElement;
  routes?: Array<RouteComponentModel>;
}
