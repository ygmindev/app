import { type TextInputKeyboardModel } from '@lib/frontend/data/components/TextInput/TextInput.models';

export type _TextInputPropsModel = {
  autoComplete?: string;
  foregroundColor: string;
  height?: number;
  isCenter?: boolean;
  isDisabled?: boolean;
  keyboard?: TextInputKeyboardModel;
  language?: string;
  mask?: string;
  maxLength?: number;
  numberOfLines?: number;
  placeholder?: string;
  value?: string;
  onBlur?(): void;
  onChange?(value?: string): void;
  onFocus?(): void;
  onKey?(key: string): void;
  onSubmit?(value?: string): void;
};
