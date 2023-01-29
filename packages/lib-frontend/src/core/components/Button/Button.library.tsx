import { Button } from '@lib/frontend/core/components/Button/Button';
import type { ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { THEME_BASIC_SIZE, THEME_COLOR } from '@lib/frontend/style/style.constants';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ButtonPropsModel> = {
  Component: Button,
  defaultProps: {
    children: 'text',
  },
  variants: [
    { props: { elementState: ELEMENT_STATE.LOADING } },
    { props: { elementState: ELEMENT_STATE.DISABLED } },
    { props: { icon: 'person' } },
    ...Object.values(THEME_BASIC_SIZE).map((size) => ({ props: { size } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color, isTransparent: true } })),
  ],
};
