import { type ReactElement } from 'react';

import { type ChildrenPropsModel, type ProviderPropsModel } from '@lib/frontend/core/core.models';
import { type RootContextModel } from '@lib/frontend/root/root.models';

export type RootPropsModel = ChildrenPropsModel & {
  additionalProviders?: Array<ReactElement<ProviderPropsModel<RootContextModel>>>;
  context?: RootContextModel;
};
