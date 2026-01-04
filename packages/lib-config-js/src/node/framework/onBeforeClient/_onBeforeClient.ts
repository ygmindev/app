import {
  type _OnBeforeClientModel,
  type _OnBeforeClientParamsModel,
} from '@lib/config/node/framework/onBeforeClient/_onBeforeClient.models';

export const _onBeforeClient =
  ({ render }: _OnBeforeClientParamsModel): _OnBeforeClientModel =>
  async (params) =>
    render(params);
