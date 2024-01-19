import { type TextInputKeyboardModel } from '@lib/frontend/data/components/TextInput/TextInput.models';

export type _TextInputPropsModel = {
  autoComplete?: string;
  foregroundColor: string;
  height: number;
  isCenter?: boolean;
  isDisabled?: boolean;
  keyboard?: TextInputKeyboardModel;
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
