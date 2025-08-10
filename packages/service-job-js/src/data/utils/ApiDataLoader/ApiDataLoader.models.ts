import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';
import { type XmlNodeModel } from '@lib/shared/data/utils/parseXml/parseXml.models';
import { type HTTP_METHOD, type HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';
import {
  type DataLoaderModel,
  type DataLoaderParamsModel,
} from '@service/job/data/utils/DataLoader/DataLoader.models';

export type ApiDataLoaderParamsModel<
  TType extends SourcedEntityResourceModel,
  TResponse = unknown,
  TResponseType extends HTTP_RESPONSE_TYPE = HTTP_RESPONSE_TYPE.JSON,
> = DataLoaderParamsModel<TType> & {
  headers?: Record<string, unknown>;
  method?: HTTP_METHOD;
  params?: Record<string, unknown>;
  responseType?: TResponseType;
  uri: string;
  transformer(
    response: TResponseType extends HTTP_RESPONSE_TYPE.XML ? XmlNodeModel : TResponse,
  ): Promise<Array<Partial<TType>>>;
};

export type ApiDataLoaderModel<TType extends SourcedEntityResourceModel> = DataLoaderModel<TType>;
