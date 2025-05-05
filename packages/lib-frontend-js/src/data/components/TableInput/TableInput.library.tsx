import { TableInput } from '@lib/frontend/data/components/TableInput/TableInput';
import { type TableInputPropsModel } from '@lib/frontend/data/components/TableInput/TableInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<TableInputPropsModel<unknown>> = {
  Component: TableInput,
  defaultProps: {
    element: <></>,
  },
  variants: [],
};
