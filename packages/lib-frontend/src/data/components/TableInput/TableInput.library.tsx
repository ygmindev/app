import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { TableInput } from '@lib/frontend/data/components/TableInput/TableInput';
import { type TableInputPropsModel } from '@lib/frontend/data/components/TableInput/TableInput.models';

export const props: LibraryPropsModel<TableInputPropsModel> = {
  Component: TableInput,
  defaultProps: {},
  variants: [],
};
