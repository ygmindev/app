import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import {
  type ModalTextInputPropsModel,
  type ModalTextInputRefModel,
} from '@lib/frontend/data/components/ModalTextInput/ModalTextInput.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { forwardRef, useState } from 'react';

export const ModalTextInput: RLFCModel<ModalTextInputRefModel, ModalTextInputPropsModel> =
  forwardRef(({ element, ...props }, ref) => {
    const [isOpen, isOpenSet] = useState<boolean>();
    return (
      <>
        <TextInput
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
