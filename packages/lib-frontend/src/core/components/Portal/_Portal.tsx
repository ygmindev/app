import type { _PortalPropsModel } from '@lib/frontend/core/components/Portal/_Portal.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { ComponentType } from 'react';
import { Portal } from 'react-native-paper';

export const _Portal = composeComponent<_PortalPropsModel, WithChildrenPropsModel>({
  getComponent: Portal as ComponentType<WithChildrenPropsModel>,
  getProps: ({ children }) => ({ children }),
});
