import type { ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import type { ModalPropsModel } from '@lib/frontend/core/components/Modal/Modal.models';
import type { ReactElement } from 'react';

export interface ModalButtonPropsModel extends ButtonPropsModel {
  modalElement: ReactElement<ModalPropsModel>;
}
