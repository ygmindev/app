import type { AnimatePresenceProps } from 'framer-motion';
import { AnimatePresence } from 'moti';

import type { _ExitablePropsModel } from '#lib-frontend/animation/components/Exitable/_Exitable.models';
import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';

export const _Exitable = composeComponent<
  _ExitablePropsModel,
  AnimatePresenceProps & ChildrenPropsModel
>({
  Component: AnimatePresence,

  getProps: ({ children, isInitial = false }) => ({ children, initial: isInitial }),
});
