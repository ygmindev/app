import { CheckboxInput } from '@lib/frontend/data/components/CheckboxInput/CheckboxInput';
import { type CheckboxInputPropsModel } from '@lib/frontend/data/components/CheckboxInput/CheckboxInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<CheckboxInputPropsModel> = {
  Component: CheckboxInput,
  defaultProps: {
    label: 'checkbox',
  },
  variants: [{ props: { defaultValue: true } }],
};
