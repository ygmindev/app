import type { WebConfigParamsModel } from '@lib/config/framework/web/web.models';
import type { ChildrenPropsModel, FCModel } from '@lib/frontend/core/core.models';
import type { ComponentType } from 'react';

export interface _ExportRendererClientParamsModel extends Pick<WebConfigParamsModel, 'rootId'> {
  render: FCModel<ChildrenPropsModel>;
}

export interface _ExportRendererClientModel {
  render(params: { Page: ComponentType; pageProps?: object }): Promise<void>;
}
