import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';
import { Screen } from '@lib/shared/crawling/utils/Screen/Screen';
import {
  type CrawlDataLoaderModel,
  type CrawlDataLoaderParamsModel,
} from '@service/job/data/utils/CrawlDataLoader/CrawlDataLoader.models';
import { DataLoader } from '@service/job/data/utils/DataLoader/DataLoader';

export class CrawlDataLoader<TType extends SourcedEntityResourceModel>
  extends DataLoader<TType>
  implements CrawlDataLoaderModel<TType>
{
  params!: CrawlDataLoaderParamsModel<TType>;

  constructor(params: CrawlDataLoaderParamsModel<TType>) {
    const source = params.source ?? params.uri;
    super({ ...params, name: params.name ?? source, source });
  }

  async fetch(): Promise<Array<Partial<TType>>> {
    const { transformer, uri } = this.params;
    const screen = new Screen();
    try {
      await screen.open(uri);
      return await transformer(screen);
    } catch (e) {
      console.warn(e);
      await screen.close();
    }
    return [];
  }
}
