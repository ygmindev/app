import type { FormValidatorModel } from '@lib/frontend/core/hooks/useForm/useForm.models';
import { size, toNumber } from 'lodash';
import moment from 'moment';

export const required: FormValidatorModel<string> = (value) =>
  value ? undefined : ({ t }) => t('core:messages.required');

export const noNumberOrSpecialCharacter: FormValidatorModel<string> = (value) =>
  required(value) ||
  (/[0-9~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(value) // eslint-disable-line no-useless-escape
    ? ({ t }) => t('core:messages.noNumberOrSpecialCharacter')
    : undefined);

export const validEmail: FormValidatorModel<string> = (value) =>
  value && /\S+@\S+\.\S+/.test(value.toLowerCase())
    ? undefined
    : ({ t }) => t('core:messages.invalidEmailAddress');

export const exactLength =
  (length: number): FormValidatorModel<string> =>
  (value) =>
    size(value) === length ? undefined : ({ t }) => t('core:messages.incorrectLength');

export const minLength =
  (length: number): FormValidatorModel<string> =>
  (value) =>
    size(value) === length ? undefined : ({ t }) => t('core:messages.minLength');

export const zipCode: FormValidatorModel<string> = (value: string) =>
  /^\d{5}(?:[-\s]\d{4})?$/.test(value) ? undefined : ({ t }) => t('core:messages.zipCode');

export const range =
  (min: number, max: number): FormValidatorModel<string> =>
  (value: string) =>
    required(value) ||
    (toNumber(value) >= min && toNumber(value) <= max
      ? undefined
      : ({ t }) => t('core:messages.incorrectRange'));

export const validDate =
  (format = 'MM/DD/YYYY'): FormValidatorModel<string> =>
  (value) =>
    moment(value, format).isBetween(moment('01/01/1900', format), moment())
      ? undefined
      : ({ t }) => t('core:messages.invalidDate');
