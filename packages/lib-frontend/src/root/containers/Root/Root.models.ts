import { type ReactElement } from 'react';

import { type ChildrenPropsModel, type ProviderPropsModel } from '#lib-frontend/core/core.models';
import { type RootContextModel } from '#lib-frontend/root/root.models';
import { type ExportRenderClientRenderParamsModel } from '#lib-platform/web/exports/renderClient/renderClient.models';
import { type RenderServerRenderParamsModel } from '#lib-platform/web/exports/renderServer/renderServer.models';

export type RootPropsModel = {
  additionalProviders?: Array<ReactElement<ProviderPropsModel<RootContextModel>>>;
} & ChildrenPropsModel &
  RenderServerRenderParamsModel &
  ExportRenderClientRenderParamsModel;
