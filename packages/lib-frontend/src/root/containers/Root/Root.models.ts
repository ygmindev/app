import type { ExportRenderClientParamsModel } from 'packages/lib-platform/src/web/exports/exportRendererClient/exportRendererClient.models';
import type { ExportRenderServerParamsModel } from '@lib/platformlatform/src/web/exports/exportRendererServer/exportRendererServer.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';

export interface RootPropsModel
  extends ChildrenPropsModel,
    ExportRenderServerParamsModel,
    ExportRenderClientParamsModel {}
