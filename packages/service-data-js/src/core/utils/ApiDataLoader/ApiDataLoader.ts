import { HttpImplementation } from '@lib/backend/http/utils/HttpImplementation/HttpImplementation';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { parseXml } from '@lib/shared/data/utils/parseXml/parseXml';
import { type XmlNodeModel } from '@lib/shared/data/utils/parseXml/parseXml.models';
import { HTTP_METHOD, HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';
import { type SourcedEntityResourceModel } from '@service/data/core/core.models';
import {
  type ApiDataLoaderModel,
  type ApiDataLoaderParamsModel,
} from '@service/data/core/utils/ApiDataLoader/ApiDataLoader.models';
import { DataLoader } from '@service/data/core/utils/DataLoader/DataLoader';

export class ApiDataLoader<
    TType extends SourcedEntityResourceModel,
    TResponse = unknown,
    TResponseType extends HTTP_RESPONSE_TYPE = HTTP_RESPONSE_TYPE.JSON,
  >
  extends DataLoader<TType>
  implements ApiDataLoaderModel<TType>
{
  params!: ApiDataLoaderParamsModel<TType, TResponse, TResponseType>;

  constructor(params: ApiDataLoaderParamsModel<TType, TResponse, TResponseType>) {
    super({ ...params, source: params.source ?? params.uri });
  }

  async fetch(): Promise<Array<Partial<TType>>> {
    const {
      headers,
      method = HTTP_METHOD.GET,
      params,
      responseType = HTTP_RESPONSE_TYPE.JSON,
      transformer,
      uri,
    } = this.params;
    const service = Container.get(HttpImplementation);
    const http = (() => {
      switch (method) {
        case HTTP_METHOD.GET:
          return service.get;
        case HTTP_METHOD.POST:
          return service.post;
        default:
          throw new InvalidArgumentError();
      }
    })();
    const response = await http<typeof params, TResponse>({
      params,
      request: { headers, responseType },
      url: uri,
    });
    switch (responseType) {
      case HTTP_RESPONSE_TYPE.XML: {
        const params = (await parseXml(
          response as string,
        )) as TResponseType extends HTTP_RESPONSE_TYPE.XML ? XmlNodeModel : TResponse;
        return transformer(params) ?? [];
      }
      default: {
        const params = response as TResponseType extends HTTP_RESPONSE_TYPE.XML
          ? XmlNodeModel
          : TResponse;
        return response ? transformer(params) : [];
      }
    }
  }
}
