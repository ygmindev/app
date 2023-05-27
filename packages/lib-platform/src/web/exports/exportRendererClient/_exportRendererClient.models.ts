import type { ExportRenderClientParamsModel } from '@lib/platform/web/exports/exportRendererClient/exportRendererClient.models';
import type { ChildrenPropsModel, FCModel } from '@lib/frontend/core/core.models';
import type { ComponentType } from 'react';

export interface _ExportRendererClientParamsModel {
  render: FCModel<ChildrenPropsModel & ExportRenderClientParamsModel>;
}

export interface _ExportRendererClientModel {
  render(
    params: { Page: ComponentType; isHydration?: boolean } & ExportRenderClientParamsModel,
  ): Promise<void>;
}
