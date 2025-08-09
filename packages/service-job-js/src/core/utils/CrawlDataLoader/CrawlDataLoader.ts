import { Screen } from '@lib/shared/crawling/utils/Screen/Screen';
import { type SourcedEntityResourceModel } from 'packages/service-job-js/src/core/core.models';
import {
  type CrawlDataLoaderModel,
  type CrawlDataLoaderParamsModel,
} from 'packages/service-job-js/src/core/utils/CrawlDataLoader/CrawlDataLoader.models';
import { DataLoader } from 'packages/service-job-js/src/core/utils/DataLoader/DataLoader';

export class CrawlDataLoader<TType extends SourcedEntityResourceModel>
  extends DataLoader<TType>
  implements CrawlDataLoaderModel<TType>
{
  params!: CrawlDataLoaderParamsModel<TType>;

  constructor(params: CrawlDataLoaderParamsModel<TType>) {
    super({ ...params, source: params.source ?? params.uri });
  }

  async fetch(): Promise<Array<Partial<TType>>> {
    const { transformer, uri } = this.params;
    const screen = new Screen();
    try {
      await screen.open(uri);
      return await transformer(screen);
    } catch (e) {
      await screen?.close();
    }
    return [];
  }
}
