import { type ReactElement } from 'react';

import { type ButtonPropsModel } from '#lib-frontend/core/components/Button/Button.models';

export type ModalButtonPropsModel = ButtonPropsModel & {
  element: ReactElement;
};
