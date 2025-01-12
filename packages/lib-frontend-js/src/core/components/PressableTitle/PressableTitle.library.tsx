import { PressableTitle } from '@lib/frontend/core/components/PressableTitle/PressableTitle';
import { type PressableTitlePropsModel } from '@lib/frontend/core/components/PressableTitle/PressableTitle.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<PressableTitlePropsModel> = {
  Component: PressableTitle,
  defaultProps: {
    title: 'title',
  },
  variants: [
    { props: { description: 'description' } },
    ...cartesianObject({
      color: Object.values(THEME_COLOR),
    }).map((props) => ({ props })),
  ],
};
