import {
  type TextFieldPropsModel,
  type TextFieldRefModel,
} from '@lib/frontend/data/components/TextField/TextField.models';
import { type ReactElement } from 'react';

export type ModalTextFieldPropsModel = TextFieldPropsModel & {
  element({ onCancel }: { onCancel(): void }): ReactElement;
};

export type ModalTextFieldRefModel = TextFieldRefModel;
