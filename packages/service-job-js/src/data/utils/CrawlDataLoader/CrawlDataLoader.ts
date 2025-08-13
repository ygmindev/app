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
    console.info(111);
    const { transformer, uri } = this.params;
    console.info(222);
    const screen = new Screen();
    console.info(333);
    try {
      console.info(444);
      await screen.open(uri);
      console.info(555);
      return await transformer(screen);
    } catch (e) {
      console.info(screen);
      await screen.close();
      console.info(777);
    }
    return [];
  }
}
