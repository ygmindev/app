import internationalizeConfig from '@lib/config/locale/internationalize/internationalize.web';
import { WEB_CONFIG } from '@lib/config/node/web/web.constants';
import { Root } from '@lib/frontend/root/containers/Root/Root';
import { renderApp } from '@lib/shared/web/utils/renderApp/renderApp';
import { _renderClient } from '@lib/shared/web/utils/renderClient/_renderClient';
import {
  type RenderClientModel,
  type RenderClientParamsModel,
} from '@lib/shared/web/utils/renderClient/renderClient.models';

export const renderClient = ({ initialize }: RenderClientParamsModel): RenderClientModel =>
  _renderClient({
    initialize,
    internationalizeConfig: internationalizeConfig.params(),
    render: ({ context, element }) => renderApp({ Root, children: element, context }),
    rootId: WEB_CONFIG.rootId,
  });
