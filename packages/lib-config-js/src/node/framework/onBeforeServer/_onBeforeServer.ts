import {
  type _OnBeforeServerModel,
  type _OnBeforeServerParamsModel,
} from '@lib/config/node/framework/onBeforeServer/_onBeforeServer.models';

export const _onBeforeServer =
  ({ render }: _OnBeforeServerParamsModel): _OnBeforeServerModel =>
  async (params) =>
    render(params);
