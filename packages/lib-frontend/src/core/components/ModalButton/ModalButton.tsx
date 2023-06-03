import { Button } from '@lib/frontend/core/components/Button/Button';
import type { ModalButtonPropsModel } from '@lib/frontend/core/components/ModalButton/ModalButton.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { cloneElement, useMemo, useState } from 'react';

export const ModalButton: SFCModel<ModalButtonPropsModel> = ({
  modalElement,
  onPress,
  ...props
}) => {
  const [modalIsOpen, modalIsOpenSet] = useState<boolean>();
  const modalElementF = useMemo(() => {
    cloneElement(modalElement, { isOpen: modalIsOpen, onClose: () => modalIsOpenSet(false) });
  }, [modalIsOpen]);
  return (
    <>
      <Button
        {...props}
        onPress={() => {
          onPress && onPress();
          modalIsOpenSet(!modalIsOpen);
        }}
      />

      {modalElementF}
    </>
  );
};
