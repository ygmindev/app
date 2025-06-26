import { type PhoneNumberValueModel } from '@lib/shared/locale/locale.models';

export type _PhoneNumberModel = {
  format(value: string | PhoneNumberValueModel): string;
  isValid(value: string, callingCode?: string): boolean;
  parse(value: string): PhoneNumberValueModel;
};
