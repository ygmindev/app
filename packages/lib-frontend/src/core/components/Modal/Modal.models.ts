import { type ReactNode } from 'react';

import { type _ModalPropsModel } from '#lib-frontend/core/components/Modal/_Modal.models';

export type ModalPropsModel = Omit<
  _ModalPropsModel,
  'duration' | 'deviceHeight' | 'deviceWidth'
> & { header?: ReactNode | string };

export type ModalRefModel = {
  toggle(value?: boolean): void;
};
