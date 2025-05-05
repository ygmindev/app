import { type _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import { View } from '@lib/frontend/core/components/View/View';
import {
  type ViewPropsModel,
  type ViewRefModel,
} from '@lib/frontend/core/components/View/View.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ViewStyleModel } from '@lib/frontend/style/style.models';
import { Linking } from 'react-native';

export const _Link = composeComponent<
  _LinkPropsModel,
  ViewPropsModel,
  ViewStyleModel,
  ViewRefModel
>({
  Component: View,

  getProps: ({ children, onPress, pathname }) => ({
    children,
    onPress: () => (pathname ? Linking.openURL(pathname) : onPress && onPress()),
  }),
});
