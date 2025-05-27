import { type ChildrenPropsModel, type FCModel } from '@lib/frontend/core/core.models';
import { Root } from '@lib/frontend/root/containers/Root/Root.node';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import type { PageContextServer } from 'vike/types';
import { usePageContext } from 'vike-react/usePageContext';

export const Wrapper: FCModel<ChildrenPropsModel> = ({ children }) => {
  const { context } = usePageContext() as PageContextServer & { context: RootContextModel };
  return <Root context={context}>{children}</Root>;
};
