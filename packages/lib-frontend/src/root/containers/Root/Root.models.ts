import { type ChildrenPropsModel, type ProviderPropsModel } from '@lib/frontend/core/core.models';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { type ReactElement } from 'react';

export type RootPropsModel = ChildrenPropsModel & {
  additionalProviders?: Array<ReactElement<ProviderPropsModel<RootContextModel>>>;
  context?: RootContextModel;
};
