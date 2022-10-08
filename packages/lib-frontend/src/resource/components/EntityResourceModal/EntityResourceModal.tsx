import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '@lib/frontend/core/core.models';
import type { EntityResourceModalPropsModel } from '@lib/frontend/resource/components/EntityResourceModal/EntityResourceModal.models';

export const EntityResourceModal: FCModel<EntityResourceModalPropsModel> = ({
  isOpen,
  onClose,
  testID,
  ...props
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <Wrapper testID={testID}>
        <Text>hi</Text>
      </Wrapper>
    </Modal>
  );
};
