import { type ReactElement } from 'react';

import { type ChildrenPropsModel, type ProviderPropsModel } from '#lib-frontend/core/core.models';
import { type RootContextModel } from '#lib-frontend/root/root.models';
import { type ExportRenderClientRenderParamsModel } from '#lib-platform/web/exports/exportRendererClient/exportRendererClient.models';
import { type ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';

export type RootPropsModel = {
  additionalProviders?: Array<ReactElement<ProviderPropsModel<RootContextModel>>>;
} & ChildrenPropsModel &
  ExportRenderServerRenderParamsModel &
  ExportRenderClientRenderParamsModel;
