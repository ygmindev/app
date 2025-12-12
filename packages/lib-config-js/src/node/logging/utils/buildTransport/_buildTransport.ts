import {
  type _BuildTransportModel,
  type _BuildTransportParamsModel,
} from '@lib/config/node/logging/utils/buildTransport/_buildTransport.models';
import { type LogDescriptor } from 'pino';
import build from 'pino-abstract-transport';

export const _buildTransport =
  <TParams extends Record<string, unknown>>({
    handler,
  }: _BuildTransportParamsModel<TParams>): _BuildTransportModel<TParams> =>
  async (params) => {
    const h = handler(params);
    return build(async function (source) {
      for await (const obj of source) {
        void h(obj as LogDescriptor);
      }
    });
  };
