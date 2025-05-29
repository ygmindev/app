import { type ChildrenPropsModel, type FCModel } from '@lib/frontend/core/core.models';
import { Root } from '@lib/frontend/root/containers/Root/Root.node';
import { useRootContext } from '@lib/frontend/root/hooks/useRootContext/useRootContext';

export const Wrapper: FCModel<ChildrenPropsModel> = ({ children }) => {
  const context = useRootContext();
  return <Root context={context}>{children}</Root>;
};
