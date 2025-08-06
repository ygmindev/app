import {
  type HandleModel,
  type ScreenModel,
  type SelectorModel,
} from '@lib/shared/crawling/utils/Screen/Screen.models';
import { type SourcedEntityResourceModel } from '@service/data/core/core.models';
import {
  type CrawlDataLoaderModel,
  type CrawlDataLoaderParamsModel,
} from '@service/data/core/utils/CrawlDataLoader/CrawlDataLoader.models';

export type TableCrawlDataLoaderParamsModel<
  TType extends SourcedEntityResourceModel,
  TResponse extends Record<string, unknown>,
> = Omit<CrawlDataLoaderParamsModel<TType>, 'transformer'> & {
  cellsSelector?: SelectorModel | ((handle?: HandleModel | null) => Promise<Array<HandleModel>>);
  nCols?: number;
  nRows?: number;
  rowsSelector?: SelectorModel | ((handle?: HandleModel | null) => Promise<Array<HandleModel>>);
  tableSelector?: SelectorModel | ((screen: ScreenModel) => Promise<HandleModel | null>);
  transformer(response: Array<TResponse>): Array<Partial<TType>>;
};

export type TableCrawlDataLoaderModel<TType extends SourcedEntityResourceModel> =
  CrawlDataLoaderModel<TType>;
