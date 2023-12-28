import { type TextFieldKeyboardModel } from '#lib-frontend/data/components/TextField/TextField.models';

export type _TextFieldPropsModel = {
  autoComplete?: string;
  foregroundColor: string;
  height: number;
  isCenter?: boolean;
  isDisabled?: boolean;
  keyboard?: TextFieldKeyboardModel;
  language?: string;
  maxLength?: number;
  numberOfLines?: number;
  onBlur?(): void;
  onChange?(value?: string): void;
  onEscape?(): void;
  onFocus?(): void;
  onRemove?(): void;
  onSubmit?(value?: string): void;
  placeholder?: string;
  value?: string;
};
