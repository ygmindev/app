import { type ChildrenPropsModel, type FCModel } from '@lib/frontend/core/core.models';
import { type RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import { type RootContextPropsModel } from '@lib/frontend/root/root.models';
import { type ReactElement } from 'react';

export type RenderAppParamsModel = RootContextPropsModel & {
  Root: FCModel<RootPropsModel>;
} & ChildrenPropsModel;

export type RenderAppModel = {
  element: ReactElement;
  getStyleSheet(): ReactElement;
};
