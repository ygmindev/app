import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { NAVIGATION_TYPE } from '@lib/frontend/routing/components/Page/Page.constants';
import type { RouteModel } from '@lib/frontend/routing/containers/Router/Router.models';

export type NavigationTypeModel = `${NAVIGATION_TYPE}`;

export type PageModel = Omit<RouteModel, 'routes'> &
  WithChildrenPropsModel & {
    isProtected?: boolean;
    isTrackingEnabled?: boolean;
    navigation?: NavigationTypeModel;
  } & ({ pathname: '/'; routes?: never } | { pathname: string; routes?: Array<PageModel> });
