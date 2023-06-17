import type { ReactElement } from 'react';

import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { RootPropsModel } from '#lib-frontend/root/containers/Root/Root.models';
import type { RootContextModel } from '#lib-frontend/root/root.models';
import type { CallableModel } from '#lib-shared/core/core.models';

export type RenderAppParamsModel = {
  context?: RootContextModel;
} & Pick<RootPropsModel, 'additionalProviders'> &
  ChildrenPropsModel;

export type RenderAppModel = {
  element: ReactElement;
  getCss: CallableModel<ReactElement>;
};
