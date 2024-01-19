import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ButtonPropsModel> = {
  Component: Button,
  defaultProps: {
    children: 'children',
  },
  variants: [
    { props: { icon: 'personCircle' } },
    ...Object.values(ELEMENT_STATE).map((elementState) => ({ props: { elementState } })),
    ...Object.values(THEME_SIZE).map((size) => ({ props: { size } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    ...Object.values(THEME_COLOR).map((color) => ({
      props: { color, type: BUTTON_TYPE.TRANSPARENT },
    })),
    ...Object.values(THEME_COLOR).map((color) => ({
      props: { color, type: BUTTON_TYPE.INVISIBLE },
    })),
    { props: { children: undefined, icon: 'personCircle' } },
  ],
};
