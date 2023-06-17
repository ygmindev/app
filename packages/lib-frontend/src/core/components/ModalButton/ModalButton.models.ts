import type { ReactElement } from 'react';

import type { ButtonPropsModel } from '#lib-frontend/core/components/Button/Button.models';
import type { ModalPropsModel } from '#lib-frontend/core/components/Modal/Modal.models';

export type ModalButtonPropsModel = {
  modalElement: ReactElement<ModalPropsModel>;
} & ButtonPropsModel;
