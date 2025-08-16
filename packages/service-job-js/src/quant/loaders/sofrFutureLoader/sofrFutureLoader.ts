import { InterestRateImplementation } from '@lib/model/quant/InterestRate/InterestRateImplementation/InterestRateImplementation';
import { type InterestRateFutureModel } from '@lib/model/quant/InterestRateFuture/InterestRateFuture.models';
import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';
import { MultiSourceDataLoader } from '@service/job/data/utils/MultiSourceDataLoader/MultiSourceDataLoader';
import { TableCrawlDataLoader } from '@service/job/data/utils/TableCrawlDataLoader/TableCrawlDataLoader';
import { type TreasuryRateLoaderModel } from '@service/job/quant/loaders/sofrFutureLoader/sofrFutureLoader.models';

export const sofrFutureLoader: TreasuryRateLoaderModel = new MultiSourceDataLoader({
  ResourceImplementation: InterestRateImplementation,

  loaders: [
    new TableCrawlDataLoader<InterestRateFutureModel>({
      tableSelector: { type: SELECTOR_TYPE.CLASS, value: 'futures-table' },
      transformer: ({ data, headers }) => {
        console.warn('\n@@@ headers:');
        console.warn(headers);
        console.warn('\n@@@ data:');
        console.warn(data);
        return [];
      },
      uri: 'https://www.cmegroup.com/markets/interest-rates/stirs/one-month-sofr.html',
    }),
  ],
});
