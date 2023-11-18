import { forwardRef, useState } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { Modal } from '#lib-frontend/core/components/Modal/Modal';
import { type ModalRefModel } from '#lib-frontend/core/components/Modal/Modal.models';
import { type ModalButtonPropsModel } from '#lib-frontend/core/components/ModalButton/ModalButton.models';
import { type RLFCModel } from '#lib-frontend/core/core.models';

export const ModalButton: RLFCModel<ModalRefModel, ModalButtonPropsModel> = forwardRef(
  ({ element, onPress, ref: _, title, ...props }, ref) => {
    const [isOpen, isOpenSet] = useState<boolean>();
    return (
      <>
        <Button
          {...props}
          onPress={async () => {
            onPress && (await onPress());
            isOpenSet(!isOpen);
          }}
        />

        <Modal
          isFullSize
          isOpen={isOpen}
          onToggle={isOpenSet}
          ref={ref}
          title={title}>
          {element({ onCancel: () => isOpenSet(false) })}
        </Modal>
      </>
    );
  },
);
