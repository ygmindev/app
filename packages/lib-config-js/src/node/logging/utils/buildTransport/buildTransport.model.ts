import {
  type _BuildTransportModel,
  type _BuildTransportParamsModel,
} from '@lib/config/node/logging/utils/buildTransport/_buildTransport.models';

export type BuildTransportParamsModel<TParams extends Record<string, unknown>> =
  _BuildTransportParamsModel<TParams>;

export type BuildTransportModel<TParams extends Record<string, unknown>> =
  _BuildTransportModel<TParams>;
