import type { ReactElement } from 'react';

import type { ButtonPropsModel } from '#lib-frontend/core/components/Button/Button.models';
import type { ModalPropsModel } from '#lib-frontend/core/components/Modal/Modal.models';

export interface ModalButtonPropsModel extends ButtonPropsModel {
  modalElement: ReactElement<ModalPropsModel>;
}
