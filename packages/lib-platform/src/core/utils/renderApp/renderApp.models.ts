import { type ReactElement } from 'react';

import { type ChildrenPropsModel, type FCModel } from '#lib-frontend/core/core.models';
import { type RootPropsModel } from '#lib-frontend/root/containers/Root/Root.models';
import { type RootContextModel } from '#lib-frontend/root/root.models';
import { type CallableModel } from '#lib-shared/core/core.models';

export type RenderAppParamsModel = {
  Root: FCModel<RootPropsModel>;
  context?: RootContextModel;
} & ChildrenPropsModel;

export type RenderAppModel = {
  element: ReactElement;
  getCss: CallableModel<ReactElement>;
};
