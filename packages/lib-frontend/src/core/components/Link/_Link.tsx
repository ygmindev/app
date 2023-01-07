import type { _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { isString } from 'lodash';
import type { TextProps, ViewProps } from 'react-native';
import { Text, View } from 'react-native';

export const _Link = composeComponent<_LinkPropsModel, (TextProps | ViewProps) & { href?: string }>(
  {
    getComponent: ({ children }) => (isString(children) ? Text : View),

    getProps: ({ children, onPress, pathname }) => ({
      children,
      href: onPress ? undefined : pathname,
      onPress: pathname ? undefined : onPress,
    }),
  },
);
