import type { _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import type { MouseEvent, ReactNode } from 'react';
import { Component } from 'react';
import { unstable_createElement } from 'react-native-web';

export const _linkOpen = async (link: string, isNewTab?: boolean): Promise<void> => {
  window.open(link, isNewTab ? '_blank' : undefined);
};

export class _Link extends Component<_LinkPropsModel> {
  override render(): ReactNode {
    const { children, isNewTab, onPress, pathname, style } = this.props;
    return unstable_createElement('a', {
      children,
      href: pathname,
      onClick: (e: MouseEvent<HTMLAnchorElement>) => {
        if (onPress) {
          e.preventDefault();
          onPress();
        }
      },
      style,
      target: isNewTab ? '_blank' : undefined,
    });
  }
}
