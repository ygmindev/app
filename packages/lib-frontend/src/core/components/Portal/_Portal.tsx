import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { ComponentType } from 'react';
import { Portal } from 'react-native-paper';

export const _Portal = Portal;

export const _PortalProvider = composeComponent<WithChildrenPropsModel, WithChildrenPropsModel>({
  Component: Portal.Host as ComponentType<WithChildrenPropsModel>,
  getProps: ({ children }) => ({ children }),
});
