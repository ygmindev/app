import type { _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { TextProps } from 'react-native';
import { Linking, Text } from 'react-native';

export const _linkOpen = async (link: string, _isNewTab?: boolean): Promise<void> =>
  Linking.openURL(link);

export const _Link = composeComponent<_LinkPropsModel, TextProps>({
  getComponent: Text,
  getProps: ({ children, onPress, pathname }) => ({
    children,
    onPress: () => (pathname ? _linkOpen(pathname) : onPress && onPress()),
  }),
});
