import type { _ExitablePropsModel } from '@lib/frontend/animation/components/Exitable/_Exitable.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { AnimatePresence } from 'moti';

export const _Exitable = composeComponent<_ExitablePropsModel, ChildrenPropsModel>({
  getComponent: () => AnimatePresence,

  getProps: ({ children }) => ({ children, exitBeforeEnter: true }),
});
