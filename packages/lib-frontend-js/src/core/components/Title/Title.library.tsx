import { Title } from '@lib/frontend/core/components/Title/Title';
import { type TitlePropsModel } from '@lib/frontend/core/components/Title/Title.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<TitlePropsModel> = {
  Component: Title,
  defaultProps: {},
  variants: [],
};
