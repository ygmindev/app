import {
  type TextInputRefModel,
  type TextInputPropsModel,
} from '@lib/frontend/data/components/TextInput/TextInput.models';
import { type ReactElement } from 'react';

export type ModalTextInputPropsModel = TextInputPropsModel & {
  element({ onCancel }: { onCancel(): void }): ReactElement;
};

export type ModalTextInputRefModel = TextInputRefModel;
