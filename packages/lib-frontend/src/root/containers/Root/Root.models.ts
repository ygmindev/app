import type { ExportRenderClientParamsModel } from '@lib/platform/web/exports/exportRendererClient/exportRendererClient.models';
import type { ExportRenderServerParamsModel } from '@lib/platform/web/exports/exportRendererServer/exportRendererServer.models';
import type { ChildrenPropsModel, ProviderPropsModel } from '@lib/frontend/core/core.models';
import { ReactElement } from 'react';

export interface RootPropsModel
  extends ChildrenPropsModel,
    ExportRenderServerParamsModel,
    ExportRenderClientParamsModel {
      additionalProviders?: Array<ReactElement<ProviderPropsModel<unknown>>>;
    }
