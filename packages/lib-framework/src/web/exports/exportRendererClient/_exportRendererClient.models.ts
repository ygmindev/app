import type { WebConfigParamsModel } from '@lib/config/framework/web/web.models';
import type { ComponentType } from 'react';

export interface _ExportRendererClientParamsModel extends Pick<WebConfigParamsModel, 'rootId'> {}

export interface _ExportRendererClientModel {
  render(params: { Page: ComponentType }): Promise<void>;
}
