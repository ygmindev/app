import { CURVE_TENORS } from '@lib/model/quant/Curve/Curve.constants';
import { type CurveModel } from '@lib/model/quant/Curve/Curve.models';
import { CurveImplementation } from '@lib/model/quant/Curve/CurveImplementation/CurveImplementation';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';
import { RELATIVE_DATE_UNIT } from '@lib/shared/data/utils/numberFormat/numberFormat.constants';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';
import { ApiDataLoader } from '@service/job/data/utils/ApiDataLoader/ApiDataLoader';
import { MultiSourceDataLoader } from '@service/job/data/utils/MultiSourceDataLoader/MultiSourceDataLoader';
import { TableCrawlDataLoader } from '@service/job/data/utils/TableCrawlDataLoader/TableCrawlDataLoader';
import { TREASURY_RATE } from '@service/job/quant/loaders/treasuryRateLoader/treasuryRateLoader.constants';
import { type TreasuryRateLoaderModel } from '@service/job/quant/loaders/treasuryRateLoader/treasuryRateLoader.models';
import isNil from 'lodash/isNil';
import toString from 'lodash/toString';

export const treasuryRateLoader: TreasuryRateLoaderModel = new MultiSourceDataLoader({
  ResourceImplementation: CurveImplementation,

  loaders: [
    new ApiDataLoader({
      params: {
        data: 'daily_treasury_yield_curve',
        field_tdr_date_value_month: new DateTime().format('yyyyMM'),
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
                  date: new DateTime(date).date,
                  name: TREASURY_RATE,
                } as CurveModel;
                updated && (rate.lastUpdated = new DateTime(updated).date);
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
            {
              date: new DateTime(v.date, { format: 'yyyy-MM-dd' }).date,
              name: TREASURY_RATE,
            } as CurveModel,
          ),
        );
      },
      uri: 'https://api.polygon.io/fed/v1/treasury-yields',
    }),

    new TableCrawlDataLoader<CurveModel>({
      lastUpdatedSelector: (screen) => screen.find({ type: SELECTOR_TYPE.CLASS, value: 'dates' }),
      tableSelector: { type: SELECTOR_TYPE.ID, value: 'h15table' },
      transformer: ({ data, headers, lastUpdated }) => {
        const lastUpdatedF = lastUpdated
          ? new DateTime(lastUpdated.replace('Release date: ', ''), { format: 'MMMM d, yyyy' }).date
          : undefined;
        const results: Array<Partial<CurveModel>> = [];
        const startIndex = data.findIndex((v) => toString(v[headers[0]]).includes('Nominal'));
        const endIndex = data.findIndex((v) =>
          toString(v[headers[0]]).includes('Inflation indexed'),
        );
        if (startIndex !== -1 && endIndex !== -1) {
          const dataF = data.slice(startIndex + 1, endIndex);
          const dateHeader = headers.at(-1);
          if (dateHeader) {
            const { date } = new DateTime(dateHeader, { format: 'yyyy MMM d' });
            const result: Partial<CurveModel> = {
              date,
              lastUpdated: lastUpdatedF,
              name: TREASURY_RATE,
            };
            dataF.forEach((row) => {
              const instrument = toString(row[headers[0]]);
              const value = row[dateHeader];
              const [tenor, responseUnit] = instrument.split('-');
              const unit = (() => {
                switch (responseUnit) {
                  case 'month':
                    return RELATIVE_DATE_UNIT.MONTH;
                  case 'year':
                    return RELATIVE_DATE_UNIT.YEAR;
                  default:
                    return null;
                }
              })();
              if (unit) {
                result[`value_${tenor}${unit}`] = value;
              }
              results.push(result);
            });
          }
        }
        return results;
      },
      uri: 'https://www.federalreserve.gov/releases/h15/',
    }),
  ],
});
