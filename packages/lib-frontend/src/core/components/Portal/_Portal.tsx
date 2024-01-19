import { type ComponentType } from 'react';
import { Portal } from 'react-native-paper';

import { type _PortalPropsModel } from '@lib/frontend/core/components/Portal/_Portal.models';
import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const _Portal = composeComponent<_PortalPropsModel, ChildrenPropsModel>({
  Component: Portal as ComponentType<ChildrenPropsModel>,

  getProps: ({ children }) => ({ children }),
});
