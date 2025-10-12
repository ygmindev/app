import { type _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type AnchorHTMLAttributes } from 'react';

export const _Link = composeComponent<_LinkPropsModel, AnchorHTMLAttributes<HTMLAnchorElement>>({
  Component: 'a',

  getProps: ({ children, isNewTab, onPress, pathname }) => ({
    children,
    href: onPress ? undefined : pathname,
    onClick: pathname ? undefined : () => onPress?.(),
    target: isNewTab ? '_blank' : undefined,
  }),

  isWeb: true,
});
