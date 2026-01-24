import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { type ReactNode } from 'react';

export type NavigationLayoutPropsModel = ChildrenPropsModel & {
  footerElement?: ReactNode;
  headerElement?: ReactNode;
  routes?: Array<RouteModel>;
};
