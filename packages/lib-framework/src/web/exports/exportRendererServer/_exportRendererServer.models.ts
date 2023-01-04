import type { WebConfigParamsModel } from '@lib/config/framework/web/web.models';
import type { ComponentType } from 'react';

export interface _ExportRendererServerParamsModel
  extends Pick<WebConfigParamsModel, 'favicoPath' | 'rootId'> {}

export interface _ExportRendererServerModel {
  render(params: { Page: ComponentType }): Promise<{
    documentHtml: {
      _template: unknown;
    };
    pageContext: {
      redirectTo?: string;
    };
  }>;
}
