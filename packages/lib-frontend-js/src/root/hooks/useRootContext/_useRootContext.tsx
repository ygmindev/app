import { type _UseRootContextModel } from '@lib/frontend/root/hooks/useRootContext/_useRootContext.models';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import type { PageContext } from 'vike/types';
import { usePageContext } from 'vike-react/usePageContext';

export const _useRootContext = (): _UseRootContextModel => {
  const { context } = usePageContext() as PageContext & { context: RootContextModel };
  return context;
};
