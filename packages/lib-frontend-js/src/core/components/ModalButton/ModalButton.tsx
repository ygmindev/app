import { Button } from '@lib/frontend/core/components/Button/Button';
import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import {
  type ModalButtonPropsModel,
  type ModalButtonRefModel,
} from '@lib/frontend/core/components/ModalButton/ModalButton.models';
import { type RLFCModel, type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { forwardRef, useState } from 'react';

export const ModalButton: RLFCModel<ModalButtonRefModel, ModalButtonPropsModel> = forwardRef(
  ({ element, isFullSize = true, onClose, onPress, title, ...props }, ref) => {
    const [isOpen, isOpenSet] = useState<boolean>();

    const handleToggle = (isOpen?: boolean): void => {
      !isOpen && onClose?.();
      isOpenSet(isOpen);
    };

    return (
      <>
        <Button
          {...(props as Omit<RLFCPropsModel<ButtonPropsModel>, 'ref'>)}
          onPress={async () => {
            onPress && (await onPress());
            handleToggle(!isOpen);
          }}
        />

        <Modal
          isFullSize={isFullSize}
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

process.env.APP_IS_DEBUG && (ModalButton.displayName = variableName({ ModalButton }));
