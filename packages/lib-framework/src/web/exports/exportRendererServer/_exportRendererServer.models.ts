import type { WebConfigParamsModel } from '@lib/config/framework/web/web.models';
import type { ChildrenPropsModel, FCModel } from '@lib/frontend/core/core.models';
import type { LocationModel } from '@lib/frontend/route/route.models';
import type { ComponentType } from 'react';

export interface _ExportRendererServerParamsModel
  extends Pick<WebConfigParamsModel, 'favicoPath' | 'rootId'> {
  render: FCModel<ChildrenPropsModel & { location?: LocationModel }>;
}

export interface _ExportRendererServerModel {
  passToClient?: Array<string>;

  render(params: { Page: ComponentType; pageProps?: object; urlPathname?: string }): Promise<{
    documentHtml: {
      _template: unknown;
    };
    pageContext: {
      redirectTo?: string;
    };
  }>;
}
