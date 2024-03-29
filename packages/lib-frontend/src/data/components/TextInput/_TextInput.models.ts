import {
  type TextInputKeyboardModel,
  type TextInputKeyModel,
} from '@lib/frontend/data/components/TextInput/TextInput.models';

export type _TextInputPropsModel = {
  autoComplete?: string;
  foregroundColor: string;
  height?: number;
  isCenter?: boolean;
  isDisabled?: boolean;
  keyboard?: TextInputKeyboardModel;
  language?: string;
  maxLength?: number;
  numberOfLines?: number;
  onBlur?(): void;
  onChange?(value?: string): void;
  onFocus?(): void;
  onKey?(key: TextInputKeyModel): void;
  onSubmit?(value?: string): void;
  placeholder?: string;
  value?: string;
};
