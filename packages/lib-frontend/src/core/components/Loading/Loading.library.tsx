import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { type LoadingPropsModel } from '@lib/frontend/core/components/Loading/Loading.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<LoadingPropsModel> = {
  Component: Loading,
  defaultProps: {},
  variants: [
    ...cartesianObject({ size: Object.values(THEME_SIZE) }).map((props) => ({ props })),
    ...cartesianObject({ color: Object.values(THEME_COLOR) }).map((props) => ({ props })),
  ],
};
