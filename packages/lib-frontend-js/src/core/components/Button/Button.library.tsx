import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { THEME_COLOR, THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<ButtonPropsModel> = {
  Component: Button,
  defaultProps: {
    children: 'children',
  },
  variants: [
    { props: { icon: 'personCircle' } },
    ...cartesianObject({
      size: [...Object.values(THEME_SIZE), Object.values(THEME_SIZE_MORE)],
    }).map((props) => ({
      props,
    })),
    ...cartesianObject({
      color: Object.values(THEME_COLOR),
      elementState: Object.values(ELEMENT_STATE),
      type: Object.values(BUTTON_TYPE),
    }).map((props) => ({
      props,
    })),
    { props: { children: undefined, icon: 'personCircle' } },
  ],
};
