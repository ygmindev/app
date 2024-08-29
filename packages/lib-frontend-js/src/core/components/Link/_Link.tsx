import { type AnchorHTMLAttributes } from 'react';

import { type _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const _Link = composeComponent<_LinkPropsModel, AnchorHTMLAttributes<HTMLAnchorElement>>({
  Component: 'a',

  getProps: ({ children, onPress, pathname }) => ({
    children,
    href: onPress ? undefined : pathname,
    onClick: pathname ? undefined : () => onPress && onPress(),
  }),

  isWeb: true,
});
