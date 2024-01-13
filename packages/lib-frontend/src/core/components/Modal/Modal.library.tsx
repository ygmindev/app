import { useState } from 'react';

import { Button } from '@lib-frontend/core/components/Button/Button';
import { Modal } from '@lib-frontend/core/components/Modal/Modal';
import { type ModalPropsModel } from '@lib-frontend/core/components/Modal/Modal.models';
import { Wrapper } from '@lib-frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib-frontend/core/components/Wrapper/Wrapper.fixtures';
import { type LibraryPropsModel } from '@lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ModalPropsModel> = {
  Component: Modal,
  Renderer: ({ ...props }) => {
    const [isOpen, isOpenSet] = useState<boolean>(false);
    return (
      <Wrapper s>
        <Button onPress={() => isOpenSet(true)}>Open</Button>

        <Modal
          {...props}
          isOpen={isOpen}
          onClose={() => isOpenSet(false)}>
          <WrapperFixture>Modal</WrapperFixture>
        </Modal>
      </Wrapper>
    );
  },
  defaultProps: {},
  variants: [
    { props: { height: 300, width: 300 } },
    { props: { header: 'header' } },
    { props: { header: <WrapperFixture>header</WrapperFixture> } },
  ],
};
