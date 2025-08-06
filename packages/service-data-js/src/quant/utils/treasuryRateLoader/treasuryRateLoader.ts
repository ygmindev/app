import { CURVE_TENORS } from '@lib/model/quant/Curve/Curve.constants';
import { type CurveModel } from '@lib/model/quant/Curve/Curve.models';
import { CurveImplementation } from '@lib/model/quant/Curve/CurveImplementation/CurveImplementation';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { dateTimeFormat } from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat';
import { DATE_TIME_FORMAT_TYPE } from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat.constants';
import { dateTimeParse } from '@lib/shared/data/utils/dateTimeParse/dateTimeParse';
import { RELATIVE_DATE_UNIT } from '@lib/shared/data/utils/numberFormat/numberFormat.constants';
import { HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';
import { ApiDataLoader } from '@service/data/core/utils/ApiDataLoader/ApiDataLoader';
import { MultiDataLoader } from '@service/data/core/utils/MultiDataLoader/MultiDataLoader';
import { TREASURY_RATE } from '@service/data/quant/utils/treasuryRateLoader/treasuryRateLoader.constants';
import { type TreasuryRateLoaderModel } from '@service/data/quant/utils/treasuryRateLoader/treasuryRateLoader.models';
import isNil from 'lodash/isNil';

export const treasuryRateLoader: TreasuryRateLoaderModel = new MultiDataLoader({
  ResourceImplementation: CurveImplementation,

  loaders: [
    new ApiDataLoader({
      params: {
        data: 'daily_treasury_yield_curve',
        field_tdr_date_value_month: dateTimeFormat(new Date(), 'yyyyMM'),
      },
      responseType: HTTP_RESPONSE_TYPE.XML,
      transformer: async (n) =>
        n.findAll('entry').reduce(
          (r, nn) => {
            const updated = nn.find('updated')?.text() ?? undefined;
            const nnn = nn.find('properties', 'm');
            if (nnn) {
              const date = nnn.find('NEW_DATE', 'd')?.text();
              if (date) {
                const rate = {
                  date: dateTimeParse(date, DATE_TIME_FORMAT_TYPE.ISO),
                  name: TREASURY_RATE,
                } as CurveModel;
                updated && (rate.lastUpdated = dateTimeParse(updated, DATE_TIME_FORMAT_TYPE.ISO));
                return [
                  ...r,
                  CURVE_TENORS.reduce((rr, { unit, value }) => {
                    const selectorUnit =
                      unit === RELATIVE_DATE_UNIT.MONTH
                        ? 'MONTH'
                        : unit === RELATIVE_DATE_UNIT.YEAR
                          ? 'YEAR'
                          : null;
                    if (selectorUnit) {
                      const key = `value_${value}${unit}`;
                      const selector = `BC_${value}${selectorUnit}`;
                      const v = nnn.find(selector, 'd')?.text();
                      const vF = v && parseFloat(v);
                      return isNil(vF) ? rr : { ...rr, [key]: vF };
                    }
                    return rr;
                  }, rate),
                ];
              }
              return r;
            }
            return r;
          },
          [] as Array<Partial<CurveModel>>,
        ),
      uri: 'https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xmlview',
    }),

    new ApiDataLoader<
      CurveModel,
      {
        results: Array<{
          date: string;
          yield_10_year?: number;
          yield_1_month?: number;
          yield_1_year?: number;
          yield_2_year?: number;
          yield_30_year?: number;
          yield_3_month?: number;
          yield_3_year?: number;
          yield_5_year?: number;
        }>;
        status: string;
      }
    >({
      params: {
        apiKey: 'spl4XZ9HTCTndp3nu5B4zzBM2u_gstCV',
        limit: 1,
        sort: 'date.desc',
      },
      transformer: async (response) => {
        return response.results.map((v) =>
          CURVE_TENORS.reduce(
            (result, { unit, value }) => {
              const responseUnit =
                unit === RELATIVE_DATE_UNIT.MONTH
                  ? 'month'
                  : unit === RELATIVE_DATE_UNIT.YEAR
                    ? 'year'
                    : null;
              if (responseUnit) {
                const vF = v[`yield_${value}_${responseUnit}` as StringKeyModel<typeof v>];
                const key = `value_${value}${unit}`;
                return isNil(vF) ? result : { ...result, [key]: vF };
              }
              return result;
            },
            { date: dateTimeParse(v.date, 'yyyy-MM-dd'), name: TREASURY_RATE } as CurveModel,
          ),
        );
      },
      uri: 'https://api.polygon.io/fed/v1/treasury-yields',
    }),
  ],
});
