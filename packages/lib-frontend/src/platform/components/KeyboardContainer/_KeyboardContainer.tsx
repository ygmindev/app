import type { FCModel } from '@lib/frontend/core/core.models';
import type { _KeyboardContainerPropsModel } from '@lib/frontend/platform/components/KeyboardContainer/_KeyboardContainer.models';

export const _KeyboardContainer: FCModel<_KeyboardContainerPropsModel> = ({ children }) => (
  <>{children}</>
);
