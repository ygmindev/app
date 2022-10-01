import type { _LinkPropsModel } from '@lib/frontend/core/components/Link/_Link.models';
import { _Link as _LinkWeb } from '@lib/frontend/core/components/Link/_Link.web';
import type { SFCModel } from '@lib/frontend/core/core.models';
// import { useLocale } from '@lib/frontend/locale/hooks/useLocale/useLocale';
import { trim } from 'lodash';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Component } from 'react';

// TODO: fix uselocale

export { _linkOpen } from '@lib/frontend/core/components/Link/_Link.web';

const _LinkComponent: SFCModel<_LinkPropsModel> = ({ children, isNewTab, pathname, ...props }) => {
  // const { locale } = useLocale();
  const locale = '';
  return pathname && pathname.startsWith('/') ? (
    <Link
      href={`/${locale}/${trim(pathname, '/')}`}
      locale={false}>
      <a target={isNewTab ? '_blank' : undefined}>{children}</a>
    </Link>
  ) : (
    <_LinkWeb
      {...props}
      isNewTab={isNewTab}
      pathname={pathname}>
      {children}
    </_LinkWeb>
  );
};

export class _Link extends Component<_LinkPropsModel> {
  override render(): ReactNode {
    return <_LinkComponent {...this.props} />;
  }
}
