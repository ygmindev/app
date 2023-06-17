import type { ReactElement } from 'react';

import type { ChildrenPropsModel, ProviderPropsModel } from '#lib-frontend/core/core.models';
import type { ExportRenderClientRenderParamsModel } from '#lib-platform/web/exports/exportRendererClient/exportRendererClient.models';
import type { ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';

export type RootPropsModel = {
  additionalProviders?: Array<ReactElement<ProviderPropsModel<unknown>>>;
} & ChildrenPropsModel &
  ExportRenderServerRenderParamsModel &
  ExportRenderClientRenderParamsModel;
