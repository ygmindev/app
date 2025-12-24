import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import {
  type ModalPropsModel,
  type ModalRefModel,
} from '@lib/frontend/core/components/Modal/Modal.models';
import { type ReactElement } from 'react';

export type ModalButtonPropsModel<TType = void> = ButtonPropsModel<TType> &
  Pick<ModalPropsModel, 'title' | 'isFullSize'> & {
    element(params: { data?: Awaited<TType>; onClose(): void }): ReactElement;
    onClose?(): void;
  };

export type ModalButtonRefModel = ModalRefModel;
