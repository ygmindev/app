import type { _ModalPropsModel } from '@lib/frontend/core/components/Modal/_Modal.models';
import type { ReactNode } from 'react';

export interface ModalPropsModel
  extends Omit<_ModalPropsModel, 'duration' | 'deviceHeight' | 'deviceWidth'> {
  header?: ReactNode | string;
}
