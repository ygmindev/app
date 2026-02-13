import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { type ReactElement } from 'react';

export type AppContainerPropsModel = ChildrenPropsModel & {
  footerElement?: ReactElement;
  headerElement?: ReactElement;
  routes?: Array<RouteModel>;
};
