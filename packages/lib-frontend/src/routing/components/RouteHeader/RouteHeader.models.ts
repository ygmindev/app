import type { PageModel } from '@lib/frontend/routing/components/Page/Page.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface RouteHeaderPropsModel
  extends WithTestIdModel,
    Pick<PageModel, 'icon' | 'title' | 'paths'> {
  onBack?: CallableModel;
}
