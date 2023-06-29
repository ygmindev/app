import { type ReactNode } from 'react';

import { type _ModalPropsModel } from '#lib-frontend/core/components/Modal/_Modal.models';

export type ModalPropsModel = {
  header?: ReactNode | string;
} & Omit<_ModalPropsModel, 'duration' | 'deviceHeight' | 'deviceWidth'>;
