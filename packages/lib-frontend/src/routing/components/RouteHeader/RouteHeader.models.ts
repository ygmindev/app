import type { PageModel } from '@lib/frontend/routing/components/Page/Page.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface RouteHeaderPropsModel extends Pick<PageModel, 'icon' | 'title'>, WithTestIdModel {}
