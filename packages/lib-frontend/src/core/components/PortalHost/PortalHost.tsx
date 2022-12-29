import { _PortalHost } from '@lib/frontend/core/components/PortalHost/_PortalHost';
import type { _PortalHostPropsModel } from '@lib/frontend/core/components/PortalHost/_PortalHost.models';
import type { PortalHostPropsModel } from '@lib/frontend/core/components/PortalHost/PortalHost.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const PortalHost = composeComponent<PortalHostPropsModel, _PortalHostPropsModel>({
  getComponent: () => _PortalHost,
});
