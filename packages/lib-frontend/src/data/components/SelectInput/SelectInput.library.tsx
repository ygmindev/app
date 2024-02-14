import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { type SelectInputPropsModel } from '@lib/frontend/data/components/SelectInput/SelectInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SelectInputPropsModel> = {
  Component: SelectInput,
  defaultProps: {
    options: [
      { id: '1', label: 'option 1' },
      { id: '2', label: 'option 2' },
      { id: '3', label: 'option 3' },
    ],
  },
  variants: [{ props: { isMultiple: true } }, { props: { isVertical: true } }],
};
