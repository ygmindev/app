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
  TResponse extends Record<string, unknown> = Record<string, unknown>,
> = Omit<CrawlDataLoaderParamsModel<TType>, 'transformer'> & {
  cellsSelector?:
    | SelectorModel
    | ((screen: ScreenModel, handle?: HandleModel | null) => Promise<Array<HandleModel>>);
  dateSelector?:
    | SelectorModel
    | ((screen: ScreenModel, handle?: HandleModel | null) => Promise<HandleModel | null>);
  lastUpdatedSelector?:
    | SelectorModel
    | ((screen: ScreenModel, handle?: HandleModel | null) => Promise<HandleModel | null>);
  nCols?: number;
  nRows?: number;
  rowsSelector?:
    | SelectorModel
    | ((screen: ScreenModel, handle?: HandleModel | null) => Promise<Array<HandleModel>>);
  skipRows?: number;
  tableSelector?:
    | SelectorModel
    | ((screen: ScreenModel, handle?: HandleModel | null) => Promise<HandleModel | null>);
  transformer(response: {
    data: Array<TResponse>;
    date?: string | null;
    headers: Array<string>;
    lastUpdated?: string | null;
  }): Array<Partial<TType>>;
};

export type TableCrawlDataLoaderModel<TType extends SourcedEntityResourceModel> =
  CrawlDataLoaderModel<TType>;
