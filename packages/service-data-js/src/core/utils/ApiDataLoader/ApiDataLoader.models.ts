import { type XmlNodeModel } from '@lib/shared/data/utils/parseXml/parseXml.models';
import { type HTTP_METHOD, type HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';
import { type SourcedEntityResourceModel } from '@service/data/core/core.models';
import {
  type DataLoaderModel,
  type DataLoaderParamsModel,
} from '@service/data/core/utils/DataLoader/DataLoader.models';

export type ApiDataLoaderParamsModel<
  TType extends SourcedEntityResourceModel,
  TResponse = unknown,
  TResponseType extends HTTP_RESPONSE_TYPE = HTTP_RESPONSE_TYPE.JSON,
> = DataLoaderParamsModel<TType> & {
  headers?: Record<string, unknown>;
  method?: HTTP_METHOD;
  params?: Record<string, unknown>;
  responseType?: TResponseType;
  source?: string;
  uri: string;
  transformer(
    response: TResponseType extends HTTP_RESPONSE_TYPE.XML ? XmlNodeModel : TResponse,
  ): Promise<Array<Partial<TType>>>;
};

export type ApiDataLoaderModel<TType extends SourcedEntityResourceModel> = DataLoaderModel<TType>;
