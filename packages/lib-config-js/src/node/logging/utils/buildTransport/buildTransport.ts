import { _buildTransport } from '@lib/config/node/logging/utils/buildTransport/_buildTransport';
import {
  type _BuildTransportModel,
  type _BuildTransportParamsModel,
} from '@lib/config/node/logging/utils/buildTransport/_buildTransport.models';

export const buildTransport = <TParams extends Record<string, unknown>>(
  params: _BuildTransportParamsModel<TParams>,
): _BuildTransportModel<TParams> => _buildTransport(params);
