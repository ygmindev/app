import type { WebConfigParamsModel } from '@lib/config/framework/web/web.models';
import type { ExportRenderClientParamsModel } from '@lib/framework/web/exports/exportRendererClient/exportRendererClient.models';
import type { ChildrenPropsModel, FCModel } from '@lib/frontend/core/core.models';
import type { ComponentType } from 'react';

export interface _ExportRendererClientParamsModel extends Pick<WebConfigParamsModel, 'rootId'> {
  render: FCModel<ChildrenPropsModel & ExportRenderClientParamsModel>;
}

export interface _ExportRendererClientModel {
  render(
    params: { Page: ComponentType; isHydration?: boolean } & ExportRenderClientParamsModel,
  ): Promise<void>;
}
