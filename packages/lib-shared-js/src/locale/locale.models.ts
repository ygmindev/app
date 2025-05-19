import { type i18n } from 'i18next';
import { type ReportNamespaces } from 'react-i18next';

export type PhoneNumberValueModel = {
  callingCode?: string;
  extension?: string;
  phone: string;
};

export type I18nModel = i18n & { reportNamespaces?: ReportNamespaces };
