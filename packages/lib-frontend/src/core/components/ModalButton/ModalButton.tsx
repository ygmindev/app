import { useState } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { Modal } from '#lib-frontend/core/components/Modal/Modal';
import { type ModalButtonPropsModel } from '#lib-frontend/core/components/ModalButton/ModalButton.models';
import { type LFCModel } from '#lib-frontend/core/core.models';

export const ModalButton: LFCModel<ModalButtonPropsModel> = ({ element, onPress, ...props }) => {
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
        onClose={() => isOpenSet(false)}>
        {element}
      </Modal>
    </>
  );
};
