import { WEB_CONFIG } from '@lib/config/node/web/web.constants';
import { Root } from '@lib/frontend/root/containers/Root/Root.node';
import { renderApp } from '@lib/shared/web/utils/renderApp/renderApp';
import { _renderServer } from '@lib/shared/web/utils/renderServer/_renderServer';
import {
  type RenderServerModel,
  type RenderServerParamsModel,
} from '@lib/shared/web/utils/renderServer/renderServer.models';

export const renderServer = ({ initialize, routes }: RenderServerParamsModel): RenderServerModel =>
  _renderServer({
    initialize,
    render: ({ context, element }) => renderApp({ Root, children: element, context }),
    rootId: WEB_CONFIG.rootId,
    routes,
    ssrContextKeys: WEB_CONFIG.ssrContextKeys,
  });
