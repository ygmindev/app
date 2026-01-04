import { type _OnAfterServerModel } from '@lib/config/node/framework/onAfterServer/_onAfterServer.models';
// import { useConfig } from 'vike-react/useConfig';

export const _onAfterServer: _OnAfterServerModel = async (params) => {
  params.enableEagerStreaming = true;
  // const config = useConfig();
  // params.getStyleSheet && config({ Head: params.getStyleSheet() });
  return params;
};
