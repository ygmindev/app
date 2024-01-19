import { ModalTextField } from '@lib/frontend/data/components/ModalTextField/ModalTextField';
import { type ModalTextFieldPropsModel } from '@lib/frontend/data/components/ModalTextField/ModalTextField.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ModalTextFieldPropsModel> = {
  Component: ModalTextField,
  defaultProps: {},
  variants: [],
};
