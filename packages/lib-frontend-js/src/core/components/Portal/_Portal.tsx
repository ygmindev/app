import { type _PortalPropsModel } from '@lib/frontend/core/components/Portal/_Portal.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { Portal, type PortalProps } from 'react-native-paper';

export const _Portal = composeComponent<_PortalPropsModel, Omit<PortalProps, 'theme'>>({
  Component: Portal,

  getProps: ({ children }) => ({ children }),
});
