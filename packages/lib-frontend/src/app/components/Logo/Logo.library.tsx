import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import { type LogoPropsModel } from '@lib/frontend/app/components/Logo/Logo.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<LogoPropsModel> = {
  Component: Logo,
  defaultProps: {},
  variants: cartesianObject({ size: Object.values(THEME_SIZE) }).map((props) => ({ props })),
};
