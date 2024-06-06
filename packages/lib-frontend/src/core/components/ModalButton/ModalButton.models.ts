import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { type ModalPropsModel } from '@lib/frontend/core/components/Modal/Modal.models';
import { type ReactElement } from 'react';

export type ModalButtonPropsModel = ButtonPropsModel &
  Pick<ModalPropsModel, 'title' | 'isFullSize'> & {
    element({ onClose }: { onClose(): void }): ReactElement;
    onClose?(): void;
  };
