import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _KeyboardContainerPropsModel } from '@lib/frontend/platform/components/KeyboardContainer/_KeyboardContainer.models';
import { Fragment } from 'react';

export const _KeyboardContainer = composeComponent<
  _KeyboardContainerPropsModel,
  ChildrenPropsModel
>({
  getComponent: () => Fragment,

  getProps: ({ children }) => ({ children }),
});
