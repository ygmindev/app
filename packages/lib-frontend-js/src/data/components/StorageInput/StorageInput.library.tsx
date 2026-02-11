import { StorageInput } from '@lib/frontend/data/components/StorageInput/StorageInput';
import { type StorageInputPropsModel } from '@lib/frontend/data/components/StorageInput/StorageInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<StorageInputPropsModel> = {
  Component: StorageInput,
  defaultProps: {},
  variants: [],
};
