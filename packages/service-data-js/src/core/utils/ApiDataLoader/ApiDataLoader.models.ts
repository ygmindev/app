import { type HTTP_METHOD, type HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';
import { type SourcedEntityResourceModel } from '@service/data/core/core.models';
import {
  type DataLoaderModel,
  type DataLoaderParamsModel,
} from '@service/data/core/utils/DataLoader/DataLoader.models';

export type ApiDataLoaderParamsModel<
  TResponse,
  TType extends SourcedEntityResourceModel,
  TRoot = undefined,
> = DataLoaderParamsModel<TType, TRoot> & {
  headers?: Record<string, unknown>;
  method?: HTTP_METHOD;
  params?: Record<string, unknown>;
  responseType?: HTTP_RESPONSE_TYPE;
  uri: string;
  transformer(response: TResponse): Promise<Array<Partial<TType>>>;
};

export type ApiDataLoaderModel<TType extends SourcedEntityResourceModel> = DataLoaderModel<TType>;
