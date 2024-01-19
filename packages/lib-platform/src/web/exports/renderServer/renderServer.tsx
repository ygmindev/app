import { WEB_CONFIG } from '@lib/config/platform/web/web.constants';
import { Root } from '@lib/frontend/root/containers/Root/Root.server';
import { renderApp } from '@lib/platform/core/utils/renderApp/renderApp';
import { _renderServer } from '@lib/platform/web/exports/renderServer/_renderServer';
import {
  type RenderServerModel,
  type RenderServerParamsModel,
} from '@lib/platform/web/exports/renderServer/renderServer.models';

export const renderServer = ({ initialize }: RenderServerParamsModel): RenderServerModel =>
  _renderServer({
    initialize,
    publicPath: WEB_CONFIG.publicPath,
    render: ({ context, element }) => renderApp({ Root, children: element, context }),
    rootId: WEB_CONFIG.rootId,
    ssrContextKeys: WEB_CONFIG.ssrContextKeys,
  });
