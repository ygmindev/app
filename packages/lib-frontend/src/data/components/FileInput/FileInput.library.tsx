import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { FileInput } from '@lib-frontend/data/components/FileInput/FileInput';
import { type FileInputPropsModel } from '@lib-frontend/data/components/FileInput/FileInput.models';

export const props: LibraryPropsModel<FileInputPropsModel> = {
  Component: FileInput,
  defaultProps: {},
  variants: [],
};
