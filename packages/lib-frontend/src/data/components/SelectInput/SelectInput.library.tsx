import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { type SelectInputPropsModel } from '@lib/frontend/data/components/SelectInput/SelectInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SelectInputPropsModel> = {
  Component: SelectInput,
  defaultProps: {
    options: [],
  },
  variants: [],
};
