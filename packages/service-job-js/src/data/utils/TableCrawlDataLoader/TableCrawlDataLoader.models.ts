import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';
import {
  type HandleModel,
  type ScreenModel,
  type SelectorModel,
} from '@lib/shared/crawling/utils/Screen/Screen.models';
import {
  type CrawlDataLoaderModel,
  type CrawlDataLoaderParamsModel,
} from '@service/job/data/utils/CrawlDataLoader/CrawlDataLoader.models';

export type TableCrawlDataLoaderParamsModel<
  TType extends SourcedEntityResourceModel,
  TResponse extends Record<string, unknown> = Record<string, unknown>,
> = Omit<CrawlDataLoaderParamsModel<TType>, 'transformer'> & {
  cellsSelector?:
    | SelectorModel
    | ((screen: ScreenModel, handle?: HandleModel | null) => Promise<Array<HandleModel>>);
  dateSelector?:
    | SelectorModel
    | ((
        screen: ScreenModel,
        handle?: HandleModel | null,
      ) => Promise<HandleModel | null | undefined>);
  lastUpdatedSelector?:
    | SelectorModel
    | ((
        screen: ScreenModel,
        handle?: HandleModel | null,
      ) => Promise<HandleModel | null | undefined>);
  nCols?: number;
  nRows?: number;
  rowsSelector?:
    | SelectorModel
    | ((screen: ScreenModel, handle?: HandleModel | null) => Promise<Array<HandleModel>>);
  skipRows?: number;
  tableSelector?:
    | SelectorModel
    | ((
        screen: ScreenModel,
        handle?: HandleModel | null,
      ) => Promise<HandleModel | null | undefined>);
  transformer(response: {
    data: Array<TResponse>;
    date?: string | null;
    headers: Array<string>;
    lastUpdated?: string | null;
  }): Array<Partial<TType>>;
};

export type TableCrawlDataLoaderModel<TType extends SourcedEntityResourceModel> =
  CrawlDataLoaderModel<TType>;
