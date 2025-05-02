import { type ChildrenPropsModel, type FCModel } from '@lib/frontend/core/core.models';
import { Root } from '@lib/frontend/root/containers/Root/Root';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import type { PageContextClient } from 'vike/types';
import { usePageContext } from 'vike-react/usePageContext';

export const Wrapper: FCModel<ChildrenPropsModel> = ({ children }) => {
  const { context } = usePageContext() as PageContextClient & { context: RootContextModel };
  return <Root context={context}>{children}</Root>;
};
