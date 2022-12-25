import type { _PortalHostPropsModel } from '@lib/frontend/core/components/PortalHost/_PortalHost.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { ComponentType } from 'react';
import { Portal } from 'react-native-paper';

export const _PortalHost = composeComponent<_PortalHostPropsModel, WithChildrenPropsModel>({
  getComponent: () => Portal.Host as ComponentType<WithChildrenPropsModel>,
  getProps: ({ children }) => ({ children }),
});
