import { type ReactElement } from 'react';

import { type ButtonPropsModel } from '@lib-frontend/core/components/Button/Button.models';
import { type TranslatableTextModel } from '@lib-frontend/locale/locale.models';

export type ModalButtonPropsModel = ButtonPropsModel & {
  element({ onCancel }: { onCancel(): void }): ReactElement;
  title?: TranslatableTextModel;
};
