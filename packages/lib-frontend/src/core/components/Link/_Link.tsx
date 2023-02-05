import type { _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { TextProps, ViewProps } from 'react-native';
import { View } from 'react-native';

export const _Link = composeComponent<_LinkPropsModel, (TextProps | ViewProps) & { href?: string }>(
  {
    Component: View,

    getProps: ({ children, onPress, pathname }) => ({
      children,
      href: onPress ? undefined : pathname,
      onPress: pathname ? undefined : onPress,
    }),
  },
);
