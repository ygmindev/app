import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { type LoadingPropsModel } from '@lib/frontend/core/components/Loading/Loading.models';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<LoadingPropsModel> = {
  Component: Loading,
  defaultProps: {},
  variants: [
    ...Object.values(THEME_SIZE).map((size) => ({ props: { size } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
  ],
};
