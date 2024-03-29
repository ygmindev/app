import { Button } from '@lib/frontend/core/components/Button/Button';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import { type ModalRefModel } from '@lib/frontend/core/components/Modal/Modal.models';
import { type ModalButtonPropsModel } from '@lib/frontend/core/components/ModalButton/ModalButton.models';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { forwardRef, useState } from 'react';

export const ModalButton: RLFCModel<ModalRefModel, ModalButtonPropsModel> = forwardRef(
  ({ element, onClose, onPress, ref: _, title, ...props }, ref) => {
    const [isOpen, isOpenSet] = useState<boolean>();

    const handleToggle = (isOpen?: boolean): void => {
      !isOpen && onClose && onClose();
      isOpenSet(isOpen);
    };

    return (
      <>
        <Button
          {...props}
          onPress={async () => {
            onPress && (await onPress());
            handleToggle(!isOpen);
          }}
        />

        <Modal
          isFullSize
          isOpen={isOpen}
          onToggle={handleToggle}
          ref={ref}
          title={title}>
          {element({ onClose: () => handleToggle(false) })}
        </Modal>
      </>
    );
  },
);
