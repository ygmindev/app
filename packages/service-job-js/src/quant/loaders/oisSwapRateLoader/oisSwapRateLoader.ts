import { type CurveModel } from '@lib/model/quant/Curve/Curve.models';
import { CurveImplementation } from '@lib/model/quant/Curve/CurveImplementation/CurveImplementation';
import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { MultiSourceDataLoader } from '@service/job/data/utils/MultiSourceDataLoader/MultiSourceDataLoader';
import { TableCrawlDataLoader } from '@service/job/data/utils/TableCrawlDataLoader/TableCrawlDataLoader';
import { OIS_SWAP_RATE } from '@service/job/quant/loaders/oisSwapRateLoader/oisSwapRateLoader.constants';
import { type OisSwapRateLoaderModel } from '@service/job/quant/loaders/oisSwapRateLoader/oisSwapRateLoader.models';
import toNumber from 'lodash/toNumber';

export const oisSwapRateLoader: OisSwapRateLoaderModel = new MultiSourceDataLoader({
  ResourceImplementation: CurveImplementation,

  loaders: [
    new TableCrawlDataLoader<CurveModel>({
      lastUpdatedSelector: { value: 'footer' },
      nCols: 2,
      tableSelector: async (screen) => {
        const tables = await screen.findAll({ type: SELECTOR_TYPE.CLASS, value: 'rates' });
        for (const table of tables) {
          const title = await table.find({ value: 'header' })?.then((h) => h?.text());
          if (title?.includes('SOFR swap rate (annual/annual)')) {
            return table;
          }
        }
        return null;
      },
      transformer: ({ data, headers, lastUpdated }) => {
        const dateHeader = headers[1];
        const { date } = new DateTime(dateHeader, { format: 'dd MMM yyyy' });
        const result: Partial<CurveModel> = { date, name: OIS_SWAP_RATE };
        const match = lastUpdated?.match(/(\d{2} \w{3} \d{4}) \| (\d{2}:\d{2}) (\w{2})/);
        if (match) {
          const [_, dateStr, timeStr, tz] = match;
          result.lastUpdated = new Date(`${dateStr} ${timeStr} GMT-0400`);
        }
        data.forEach((row) => {
          const year = row[''];
          const value = row[dateHeader];
          result[`value_${year}yr`] = toNumber(value);
        });
        return [result];
      },
      uri: 'https://www.chathamfinancial.com/technology/us-market-rates',
    }),
  ],
});
