import { type TEXT_INPUT_KEYBOARD } from '@lib/frontend/data/components/TextInput/TextInput.constants';

export type _TextInputPropsModel = {
  autoComplete?: string;
  foregroundColor: string;
  height?: number;
  isBlurOnSubmit?: boolean;
  isCenter?: boolean;
  isDisabled?: boolean;
  keyboard?: TEXT_INPUT_KEYBOARD;
  language?: string;
  mask?: string;
  maxLength?: number;
  numberOfLines?: number;
  placeholder?: string;
  selection?: { end: number; start: number };
  value?: string;
  onBlur?(): void;
  onChange?(value?: string): void;
  onFocus?(): void;
  onKey?(key: string, isMeta?: boolean): void;
  onSelection?(params: { end: number; start: number }): void;
  onSubmit?(value?: string): void;
};
