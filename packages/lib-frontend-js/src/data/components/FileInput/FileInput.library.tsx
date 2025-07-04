import { FileInput } from '@lib/frontend/data/components/FileInput/FileInput';
import { type FileInputPropsModel } from '@lib/frontend/data/components/FileInput/FileInput.models';
import { LIBRARY_CATEGORY_FORM } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<FileInputPropsModel> = {
  Component: FileInput,
  category: LIBRARY_CATEGORY_FORM,
  defaultProps: {},
  variants: [],
};
