import type { NAVIGATION_TYPE } from '@lib/frontend/route/components/Page/Page.constants';
import type { RouteComponentModel } from '@lib/frontend/route/containers/Router/Router.models';

export type NavigationTypeModel = `${NAVIGATION_TYPE}`;

export interface PageModel extends RouteComponentModel {}
