import { type ScreenModel } from '@lib/shared/crawling/utils/Screen/Screen.models';
import { type SourcedEntityResourceModel } from '@service/data/core/core.models';
import {
  type DataLoaderModel,
  type DataLoaderParamsModel,
} from '@service/data/core/utils/DataLoader/DataLoader.models';

export type CrawlDataLoaderParamsModel<TType extends SourcedEntityResourceModel> =
  DataLoaderParamsModel<TType> & {
    uri: string;
    transformer(screen: ScreenModel): Promise<Array<Partial<TType>>>;
  };

export type CrawlDataLoaderModel<TType extends SourcedEntityResourceModel> = DataLoaderModel<TType>;
