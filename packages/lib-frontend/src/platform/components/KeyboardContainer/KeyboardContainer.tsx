import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { _KeyboardContainer } from '@lib/frontend/platform/components/KeyboardContainer/_KeyboardContainer';
import type { _KeyboardContainerPropsModel } from '@lib/frontend/platform/components/KeyboardContainer/_KeyboardContainer.models';
import type { KeyboardContainerPropsModel } from '@lib/frontend/platform/components/KeyboardContainer/KeyboardContainer.models';

export const KeyboardContainer = composeComponent<
  KeyboardContainerPropsModel,
  _KeyboardContainerPropsModel
>({
  getComponent: () => _KeyboardContainer,
});
