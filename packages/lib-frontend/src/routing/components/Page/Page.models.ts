import type { NAVIGATION_TYPE } from '@lib/frontend/routing/components/Page/Page.constants';
import type { RouteComponentModel } from '@lib/frontend/routing/containers/Router/Router.models';

export type NavigationTypeModel = `${NAVIGATION_TYPE}`;

export interface PagePropsModel extends RouteComponentModel {}
