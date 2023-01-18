import type { ExportRenderClientParamsModel } from '@lib/framework/web/exports/exportRendererClient/exportRendererClient.models';
import type { ExportRenderServerParamsModel } from '@lib/framework/web/exports/exportRendererServer/exportRendererServer.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { RouteParamsModel } from '@lib/frontend/route/route.models';

export interface RootPropsModel
  extends ChildrenPropsModel,
    ExportRenderServerParamsModel,
    ExportRenderClientParamsModel {
  route?: RouteParamsModel;
}
