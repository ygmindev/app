import { ModalTextInput } from '@lib/frontend/data/components/ModalTextInput/ModalTextInput';
import { type ModalTextInputPropsModel } from '@lib/frontend/data/components/ModalTextInput/ModalTextInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ModalTextInputPropsModel> = {
  Component: ModalTextInput,
  defaultProps: {},
  variants: [],
};
