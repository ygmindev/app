import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';

export type _OAuthProviderPropsModel = ChildrenPropsModel & {
  secrets: {
    google: string;
  };
};
