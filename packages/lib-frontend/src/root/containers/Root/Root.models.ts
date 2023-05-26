import type { ExportRenderClientParamsModel } from '@lib/platform/web/exports/exportRendererClient/exportRendererClient.models';
import type { ExportRenderServerParamsModel } from '@lib/platform/web/exports/exportRendererServer/exportRendererServer.models';
import type { ChildrenPropsModel, ProviderPropsModel } from '@lib/frontend/core/core.models';
import { ReactElement } from 'react';
import { RootContextModel } from '@lib/frontend/root/root.models';

export interface RootPropsModel
  extends ChildrenPropsModel,
    ExportRenderServerParamsModel,
    ExportRenderClientParamsModel {
      additionalProviders?: Array<(context?: RootContextModel) => ReactElement<ProviderPropsModel<unknown>>>;
    }
