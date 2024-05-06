import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import { type LogoPropsModel } from '@lib/frontend/app/components/Logo/Logo.models';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<LogoPropsModel> = {
  Component: Logo,
  defaultProps: {},
  variants: [...Object.values(THEME_SIZE).map((size) => ({ props: { size } }))],
};
