import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import type { ModalButtonPropsModel } from '@lib/frontend/core/components/ModalButton/ModalButton.models';

export const props: LibraryPropsModel<ModalButtonPropsModel> = {
  Component: ModalButton,
  defaultProps: {},
  variants: [],
};
