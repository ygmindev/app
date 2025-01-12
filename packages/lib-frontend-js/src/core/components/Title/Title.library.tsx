import { Title } from '@lib/frontend/core/components/Title/Title';
import { type TitlePropsModel } from '@lib/frontend/core/components/Title/Title.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<TitlePropsModel> = {
  Component: Title,
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
