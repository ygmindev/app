import { _Portal } from '@lib/frontend/core/components/Portal/_Portal';
import type { _PortalPropsModel } from '@lib/frontend/core/components/Portal/_Portal.models';
import type { PortalPropsModel } from '@lib/frontend/core/components/Portal/Portal.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const Portal = composeComponent<PortalPropsModel, _PortalPropsModel>({
  getComponent: () => _Portal,
});
