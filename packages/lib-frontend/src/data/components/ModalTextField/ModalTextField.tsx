import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import {
  type ModalTextFieldPropsModel,
  type ModalTextFieldRefModel,
} from '@lib/frontend/data/components/ModalTextField/ModalTextField.models';
import { TextField } from '@lib/frontend/data/components/TextField/TextField';
import { forwardRef, useState } from 'react';

export const ModalTextField: RLFCModel<ModalTextFieldRefModel, ModalTextFieldPropsModel> =
  forwardRef(({ ...props }, ref) => {
    const [isOpen, isOpenSet] = useState<boolean>();

    return (
      <>
        <TextField
          {...props}
          ref={ref}
        />

        <Modal
          isFullSize
          isOpen={isOpen}
          onToggle={isOpenSet}>
          {element({ onCancel: () => isOpenSet(false) })}
        </Modal>
      </>
    );
  });
