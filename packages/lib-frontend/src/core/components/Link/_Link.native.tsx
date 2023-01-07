import type { _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { TextStyleModel } from '@lib/frontend/style/style.models';
import type { TextProps } from 'react-native';
import { Linking, Text } from 'react-native';

export const _Link = composeComponent<_LinkPropsModel, TextProps, TextStyleModel>({
  getComponent: () => Text,

  getProps: ({ children, onPress, pathname }) => ({
    children,
    onPress: () => (pathname ? Linking.openURL(pathname) : onPress && onPress()),
  }),
});
