import type { _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { AnchorHTMLAttributes, MouseEvent } from 'react';

export const _Link = composeComponent<_LinkPropsModel, AnchorHTMLAttributes<HTMLAnchorElement>>({
  getComponent: () => 'a',

  getProps: ({ children, isNewTab, onPress, pathname }) => ({
    children,
    href: pathname,
    onClick: (e: MouseEvent<HTMLAnchorElement>) => {
      if (onPress) {
        e.preventDefault();
        onPress();
      }
    },
    target: isNewTab ? '_blank' : undefined,
  }),

  isWeb: true,
});
