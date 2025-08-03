import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { CURVE_TENORS } from '@lib/model/quant/Curve/Curve.constants';
import { TreasuryRateImplementation } from '@lib/model/quant/TreasuryRate/TreasuryRateImplementation/TreasuryRateImplementation';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { dateTimeFormat } from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat';
import { DATE_TIME_FORMAT_TYPE } from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat.constants';
import { dateTimeParse } from '@lib/shared/data/utils/dateTimeParse/dateTimeParse';
import { RELATIVE_DATE_UNIT } from '@lib/shared/data/utils/numberFormat/numberFormat.constants';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';
import { ApiDataLoader } from '@service/data/core/utils/ApiDataLoader/ApiDataLoader';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type DataUploadParamsModel } from '@tool/task/data/templates/dataUpload/dataUpload.models';
import isNil from 'lodash/isNil';

const dataUpload: TaskParamsModel<DataUploadParamsModel> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'data-upload',

  task: [
    async ({ options }) => {
      await initialize();
      //   const loader = new ApiDataLoader({
      //     ResourceImplementation: TreasuryRateImplementation,
      //     params: {
      //       apiKey: 'spl4XZ9HTCTndp3nu5B4zzBM2u_gstCV',
      //       limit: 1,
      //       sort: 'date.desc',
      //     },
      //     transformer: async (x) => {
      //       console.warn(x);
      //       return [];
      //     },
      //     uri: 'https://api.polygon.io/fed/v1/treasury-yields',
      //   });
      //   await loader.load();
      // },

      const loader = new ApiDataLoader({
        ResourceImplementation: TreasuryRateImplementation,
        params: {
          data: 'daily_treasury_yield_curve',
          field_tdr_date_value_month: dateTimeFormat(new Date(), 'yyyyMM'),
        },
        responseType: HTTP_RESPONSE_TYPE.XML,
        source: 'home.treasury.gov',
        transformer: async (node) => {
          const rates = node.findAll('properties', 'm').map((entry) => {
            const date = entry.find('NEW_DATE', 'd')?.text();
            if (date) {
              return CURVE_TENORS.reduce(
                (result, { unit, value }) => {
                  const selectorUnit =
                    unit === RELATIVE_DATE_UNIT.MONTH
                      ? 'MONTH'
                      : unit === RELATIVE_DATE_UNIT.YEAR
                        ? 'YEAR'
                        : null;
                  if (selectorUnit) {
                    const key = `value_${value}${unit}`;
                    const selector = `BC_${value}${selectorUnit}`;
                    const v = entry.find(selector, 'd')?.text();
                    const vF = v && parseFloat(v);
                    return isNil(vF) ? result : { ...result, [key]: vF };
                  }
                  return result;
                },
                { date: dateTimeParse(date, DATE_TIME_FORMAT_TYPE.ISO) },
              );
            }
            throw new NotFoundError('date');
          });
          return rates;
        },
        uri: 'https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xmlview',
      });
      await loader.upload();
    },
  ],
};

export default dataUpload;
