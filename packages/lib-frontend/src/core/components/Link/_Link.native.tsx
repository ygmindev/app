import { Linking } from 'react-native';

import { type _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import { View } from '@lib/frontend/core/components/View/View';
import { type ViewPropsModel } from '@lib/frontend/core/components/View/View.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const _Link = composeComponent<_LinkPropsModel, ViewPropsModel>({
  Component: View,

  getProps: ({ children, onPress, pathname }) => ({
    children,
    onPress: () => (pathname ? Linking.openURL(pathname) : onPress && onPress()),
  }),
});
