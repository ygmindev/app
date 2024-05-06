import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { type AsyncTextModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';

export type ModalButtonPropsModel = ButtonPropsModel & {
  element({ onClose }: { onClose(): void }): ReactElement;
  onClose?(): void;
  title?: AsyncTextModel;
};
