import { type PartialModel } from '@lib/shared/core/core.models';
import {
  type HttpImplementationModel,
  type HttpImplementationParamsModel,
} from '@lib/shared/http/utils/HttpImplementation/HttpImplementation.models';
import { type UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';

export type UseApiParamsModel = Pick<HttpImplementationParamsModel, 'onRequest' | 'onResponse'> &
  PartialModel<UriParamsModel> & { isCredentials?: boolean };

export type UseApiModel = HttpImplementationModel;
