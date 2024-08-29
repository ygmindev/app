import { TextFilterInput } from '@lib/frontend/data/components/TextFilterInput/TextFilterInput';
import { type TextFilterInputPropsModel } from '@lib/frontend/data/components/TextFilterInput/TextFilterInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<TextFilterInputPropsModel> = {
  Component: TextFilterInput,
  defaultProps: {},
  variants: [],
};
