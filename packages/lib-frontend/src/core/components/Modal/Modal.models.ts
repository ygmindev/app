import type { ReactNode } from 'react';

import type { _ModalPropsModel } from '#lib-frontend/core/components/Modal/_Modal.models';

export interface ModalPropsModel
  extends Omit<_ModalPropsModel, 'duration' | 'deviceHeight' | 'deviceWidth'> {
  header?: ReactNode | string;
}
