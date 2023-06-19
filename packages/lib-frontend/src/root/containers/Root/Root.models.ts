import type { ReactElement } from 'react';

import type { ChildrenPropsModel, ProviderPropsModel } from '#lib-frontend/core/core.models';
import type { RootContextModel } from '#lib-frontend/root/root.models';
import type { ExportRenderClientRenderParamsModel } from '#lib-platform/web/exports/exportRendererClient/exportRendererClient.models';
import type { ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';
import type { CallableModel } from '#lib-shared/core/core.models';

export type RootPropsModel = {
  additionalProviders?: Array<
    CallableModel<ReactElement<ProviderPropsModel<unknown>>, RootContextModel>
  >;
} & ChildrenPropsModel &
  ExportRenderServerRenderParamsModel &
  ExportRenderClientRenderParamsModel;
