import type { WebConfigModel } from '@lib/config/platform/web/web.models';
import type { ExportRenderClientParamsModel } from '@lib/platform/web/exports/exportRendererClient/exportRendererClient.models';
import type { ChildrenPropsModel, FCModel } from '@lib/frontend/core/core.models';
import type { ComponentType } from 'react';
import { ReturnTypeModel } from '@lib/shared/core/core.models';

export interface _ExportRendererClientParamsModel extends Pick<ReturnTypeModel<WebConfigModel>, 'rootId'> {
  render: FCModel<ChildrenPropsModel & ExportRenderClientParamsModel>;
}

export interface _ExportRendererClientModel {
  render(
    params: { Page: ComponentType; isHydration?: boolean } & ExportRenderClientParamsModel,
  ): Promise<void>;
}
