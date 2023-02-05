import { Button } from '@lib/frontend/core/components/Button/Button';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import type { ModalPropsModel } from '@lib/frontend/core/components/Modal/Modal.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { useState } from 'react';

export const props: LibraryPropsModel<ModalPropsModel> = {
  Component: Modal,
  Renderer: ({ ...props }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
      <Wrapper spacing>
        <Button onPress={() => setIsOpen(true)}>Open</Button>

        <Modal
          {...props}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}>
          <WrapperFixture>Modal</WrapperFixture>
        </Modal>
      </Wrapper>
    );
  },
  defaultProps: {},
};
