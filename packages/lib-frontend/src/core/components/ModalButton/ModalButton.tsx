import { cloneElement, useMemo, useState } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { type ModalButtonPropsModel } from '#lib-frontend/core/components/ModalButton/ModalButton.models';
import { type LFCModel } from '#lib-frontend/core/core.models';

export const ModalButton: LFCModel<ModalButtonPropsModel> = ({ modal, onPress, ...props }) => {
  const [modalIsOpen, modalIsOpenSet] = useState<boolean>();

  const modalElementF = useMemo(() => {
    cloneElement(modal, { isOpen: modalIsOpen, onClose: () => modalIsOpenSet(false) });
  }, [modalIsOpen]);
  console.warn(modalIsOpen);
  return (
    <>
      <Button
        {...props}
        onPress={async () => {
          onPress && (await onPress());
          modalIsOpenSet(!modalIsOpen);
        }}
      />

      {modalElementF}
    </>
  );
};
