import { type ComponentType } from 'react';
import { Portal } from 'react-native-paper';

import { type _PortalHostPropsModel } from '@lib/frontend/core/components/PortalHost/_PortalHost.models';
import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const _PortalHost = composeComponent<_PortalHostPropsModel, ChildrenPropsModel>({
  Component: Portal.Host as ComponentType<ChildrenPropsModel>,

  getProps: ({ children }) => ({ children }),
});
