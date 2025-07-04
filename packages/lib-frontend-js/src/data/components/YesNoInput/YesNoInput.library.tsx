import { YesNoInput } from '@lib/frontend/data/components/YesNoInput/YesNoInput';
import { type YesNoInputPropsModel } from '@lib/frontend/data/components/YesNoInput/YesNoInput.models';
import { LIBRARY_CATEGORY_FORM } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<YesNoInputPropsModel> = {
  Component: YesNoInput,
  category: LIBRARY_CATEGORY_FORM,
  defaultProps: {},
  variants: [],
};
