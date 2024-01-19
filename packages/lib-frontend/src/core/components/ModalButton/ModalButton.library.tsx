import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import { type ModalButtonPropsModel } from '@lib/frontend/core/components/ModalButton/ModalButton.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ModalButtonPropsModel> = {
  Component: ModalButton,
  defaultProps: {
    modal: <WrapperFixture />,
  },
  variants: [],
};
