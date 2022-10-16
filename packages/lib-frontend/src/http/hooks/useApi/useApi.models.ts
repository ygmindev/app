import type { PartialModel } from '@lib/shared/core/core.models';
import type {
  HttpServiceModel,
  HttpServiceParamsModel,
} from '@lib/shared/http/utils/HttpService/HttpService.models';
import type { UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';

export type UseApiParamsModel = Pick<HttpServiceParamsModel, 'onRequest' | 'onResponse'> &
  PartialModel<UriParamsModel> & { isCredentials?: boolean };

export type UseApiModel = (params: UseApiParamsModel) => HttpServiceModel;
