import type { WebConfigModel } from '@lib/config/platform/web/_web.models';
import type { ExportRenderClientParamsModel } from 'packages/lib-platform/src/web/exports/exportRendererClient/exportRendererClient.models';
import type { ChildrenPropsModel, FCModel } from '@lib/frontend/core/core.models';
import type { ComponentType } from 'react';

export interface _ExportRendererClientParamsModel extends Pick<WebConfigModel, 'rootId'> {
  render: FCModel<ChildrenPropsModel & ExportRenderClientParamsModel>;
}

export interface _ExportRendererClientModel {
  render(
    params: { Page: ComponentType; isHydration?: boolean } & ExportRenderClientParamsModel,
  ): Promise<void>;
}
