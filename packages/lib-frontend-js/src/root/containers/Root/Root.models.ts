import { type ChildrenPropsModel, type ProviderPropsModel } from '@lib/frontend/core/core.models';
import { type RootContextModel, type RootContextPropsModel } from '@lib/frontend/root/root.models';
import { type ReactElement } from 'react';

export type RootPropsModel = ChildrenPropsModel &
  RootContextPropsModel & {
    additionalProviders?: Array<ReactElement<ProviderPropsModel<RootContextModel>>>;
  };
