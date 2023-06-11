import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface RenderAppParamsModel
  extends Pick<RootPropsModel, 'additionalProviders'>,
    ChildrenPropsModel {
  context?: RootContextModel;
}

export interface RenderAppModel {
  element: ReactElement;
  getCss: CallableModel<ReactElement>;
}
