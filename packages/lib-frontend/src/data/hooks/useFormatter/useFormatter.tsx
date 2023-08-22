import isDate from 'lodash/isDate';
import isNil from 'lodash/isNil';
import isNumber from 'lodash/isNumber';
import toString from 'lodash/toString';
import moment from 'moment';

import {
  type DateFormatterOptionsModel,
  type FormatterOptionsModel,
  type NumberFormatterOptionsModel,
  type UseFormatterModel,
} from '#lib-frontend/data/hooks/useFormatter/useFormatter.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { LOCALE } from '#lib-shared/locale/locale.constants';

export const useFormatter = (): UseFormatterModel => {
  const { t } = useTranslation([LOCALE]);

  return <TType,>(value?: TType, options?: FormatterOptionsModel<TType>): string => {
    if (isNil(value)) {
      return '';
    }

    if (isNumber(value)) {
      let valueF = value as number;
      const { isSeparated, multiplier, precision } = (options ?? {}) as NumberFormatterOptionsModel;
      !!multiplier && (valueF *= multiplier);
      return isSeparated
        ? valueF.toLocaleString(
            'en-US',
            isNil(precision)
              ? undefined
              : { maximumFractionDigits: precision, minimumFractionDigits: precision },
          )
        : isNil(precision)
        ? toString(valueF)
        : valueF.toFixed(precision);
    }
    if (isDate(value)) {
      const { format, isReadable } = (options ?? {}) as DateFormatterOptionsModel;
      if (isReadable) {
        const diff = moment().diff(value, 'days');
        switch (diff) {
          case -1:
            return t('locale:yesterday');
          case 0:
            return t('locale:today');
        }
      }
      return moment(value).format(format ?? 'M/D/YYYY');
    }
    return toString(value);
  };
};
