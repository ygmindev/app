import type { _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { TextProps } from 'react-native';
import { Linking } from 'react-native';

export const _Link = composeComponent<_LinkPropsModel, TextProps>({
  getComponent: () => 'a',

  getProps: ({ children, onPress, pathname }) => ({
    children,
    onPress: () => (pathname ? Linking.openURL(pathname) : onPress && onPress()),
  }),

  isWeb: true,
});
