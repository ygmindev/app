import isDate from 'lodash/isDate';
import isNil from 'lodash/isNil';
import isNumber from 'lodash/isNumber';
import toString from 'lodash/toString';
import moment from 'moment';

import { NUMBER_UNIT_AMOUNT, NUMBER_UNIT_RATE } from '#lib-frontend/data/data.constants';
import {
  type DateFormatterOptionsModel,
  type FormatterOptionsModel,
  type NumberFormatterOptionsModel,
  type UseFormatterModel,
} from '#lib-frontend/data/hooks/useFormatter/useFormatter.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { type FieldTypeModel } from '#lib-shared/data/data.models';
import { LOCALE } from '#lib-shared/locale/locale.constants';

export const useFormatter = (): UseFormatterModel => {
  const { t } = useTranslation([LOCALE]);

  const format = <TType,>(value?: TType, options?: FormatterOptionsModel<TType>): string => {
    if (isNil(value)) {
      return '';
    }

    if (isNumber(value)) {
      let valueF = value as number;
      const {
        isScale = true,
        isSeparated = true,
        precision,
        unit,
      } = (options ?? {}) as NumberFormatterOptionsModel;

      let postfix = '';
      switch (unit) {
        case NUMBER_UNIT_RATE.BASIS_POINT: {
          isScale && (valueF *= 1e4);
          postfix = 'bps';
          break;
        }
        case NUMBER_UNIT_AMOUNT.BILLION: {
          isScale && (valueF /= 1e9);
          postfix = 'bn';
          break;
        }
        case NUMBER_UNIT_AMOUNT.MILLION: {
          isScale && (valueF /= 1e6);
          postfix = 'mm';
          break;
        }
        case NUMBER_UNIT_RATE.PERCENT: {
          isScale && (valueF *= 1e2);
          postfix = '%';
          break;
        }
        case NUMBER_UNIT_AMOUNT.THOUSAND: {
          isScale && (valueF /= 1e3);
          postfix = 'k';
          break;
        }
      }

      return `${
        isSeparated
          ? valueF.toLocaleString(
              'en-US',
              isNil(precision)
                ? undefined
                : { maximumFractionDigits: precision, minimumFractionDigits: precision },
            )
          : isNil(precision)
          ? toString(valueF)
          : valueF.toFixed(precision)
      }${postfix}`;
    }
    if (isDate(value)) {
      const { format, isReadable } = (options ?? {}) as DateFormatterOptionsModel;
      if (isReadable) {
        const diff = moment().diff(value, 'days');
        switch (diff) {
          case 1:
            return t('locale:yesterday');
          case 0:
            return t('locale:today');
        }
      }
      return moment(value).format(format ?? 'M/D/YYYY');
    }
    return toString(value);
  };

  const unformat = <TType,>(type: FieldTypeModel, value?: string): TType | undefined => {
    if (!value) {
      return undefined;
    }

    if (isNumber(value)) {
      let valueF = value as number;
      const {
        isScale = true,
        isSeparated = true,
        precision,
        unit,
      } = (options ?? {}) as NumberFormatterOptionsModel;

      let postfix = '';
      switch (unit) {
        case NUMBER_UNIT_RATE.BASIS_POINT: {
          isScale && (valueF *= 1e4);
          postfix = 'bps';
          break;
        }
        case NUMBER_UNIT_AMOUNT.BILLION: {
          isScale && (valueF /= 1e9);
          postfix = 'bn';
          break;
        }
        case NUMBER_UNIT_AMOUNT.MILLION: {
          isScale && (valueF /= 1e6);
          postfix = 'mm';
          break;
        }
        case NUMBER_UNIT_RATE.PERCENT: {
          isScale && (valueF *= 1e2);
          postfix = '%';
          break;
        }
        case NUMBER_UNIT_AMOUNT.THOUSAND: {
          isScale && (valueF /= 1e3);
          postfix = 'k';
          break;
        }
      }

      return `${
        isSeparated
          ? valueF.toLocaleString(
              'en-US',
              isNil(precision)
                ? undefined
                : { maximumFractionDigits: precision, minimumFractionDigits: precision },
            )
          : isNil(precision)
          ? toString(valueF)
          : valueF.toFixed(precision)
      }${postfix}`;
    }
    if (isDate(value)) {
      const { format, isReadable } = (options ?? {}) as DateFormatterOptionsModel;
      if (isReadable) {
        const diff = moment().diff(value, 'days');
        switch (diff) {
          case 1:
            return t('locale:yesterday');
          case 0:
            return t('locale:today');
        }
      }
      return moment(value).format(format ?? 'M/D/YYYY');
    }
    return toString(value);
  };

  return { format, unformat };
};
