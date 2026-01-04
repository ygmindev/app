import {
  type _OnAfterServerModel,
  type _OnAfterServerParamsModel,
} from '@lib/config/node/framework/onAfterServer/_onAfterServer.models';
import { useConfig } from 'vike-react/useConfig';

export const _onAfterServer =
  ({ render }: _OnAfterServerParamsModel): _OnAfterServerModel =>
  async (params) => {
    const config = useConfig();
    const result = await render(params);
    result.enableEagerStreaming = true;
    result.getStyleSheet && config({ Head: params.getStyleSheet?.() });
    return result;
  };
