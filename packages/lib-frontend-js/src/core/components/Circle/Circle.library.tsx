import { Circle } from '@lib/frontend/core/components/Circle/Circle';
import { type CirclePropsModel } from '@lib/frontend/core/components/Circle/Circle.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { THEME_COLOR, THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<CirclePropsModel> = {
  Component: Circle,
  defaultProps: {
    backgroundColor: THEME_COLOR.PRIMARY,
  },
  variants: [
    ...cartesianObject({
      size: [...Object.values(THEME_SIZE), Object.values(THEME_SIZE_MORE)],
    }).map((props) => ({ props })),
  ],
};
