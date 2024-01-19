import { WEB_CONFIG } from '@lib/config/platform/web/web.constants';
import { Root } from '@lib/frontend/root/containers/Root/Root';
import { renderApp } from '@lib/platform/core/utils/renderApp/renderApp';
import { _renderClient } from '@lib/platform/web/exports/renderClient/_renderClient';
import {
  type RenderClientModel,
  type RenderClientParamsModel,
} from '@lib/platform/web/exports/renderClient/renderClient.models';

export const renderClient = ({ initialize }: RenderClientParamsModel): RenderClientModel =>
  _renderClient({
    initialize,
    render: ({ context, element }) => renderApp({ Root, children: element, context }),
    rootId: WEB_CONFIG.rootId,
  });
