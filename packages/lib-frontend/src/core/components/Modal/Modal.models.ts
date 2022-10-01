import type { _ModalPropsModel } from '@lib/frontend/core/components/Modal/_Modal.models';
import type { ReactNode } from 'react';

export interface ModalPropsModel extends _ModalPropsModel {
  header?: ReactNode | string;
}
