import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import type { ModalPropsModel } from '@lib/frontend/core/components/Modal/Modal.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useState } from 'react';

const Component: SFCModel<ModalPropsModel> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Wrapper spacing>
      <Button onPress={() => setIsOpen(true)}>Open</Button>

      <Modal
        {...props}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}>
        <WrapperFixture text="Modal" />
      </Modal>
    </Wrapper>
  );
};

const { Default, meta } = withStory<ModalPropsModel>({
  defaultProps: {},
  displayName: 'Modal',
  target: Component,
});

export { Default, meta as default };
