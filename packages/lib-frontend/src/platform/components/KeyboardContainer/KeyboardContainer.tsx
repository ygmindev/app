import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { _KeyboardContainer } from '@lib/frontend/platform/components/KeyboardContainer/_KeyboardContainer';
import type { _KeyboardContainerPropsModel } from '@lib/frontend/platform/components/KeyboardContainer/_KeyboardContainer.models';
import type { KeyboardContainerPropsModel } from '@lib/frontend/platform/components/KeyboardContainer/KeyboardContainer.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const KeyboardContainer = composeComponent<
  KeyboardContainerPropsModel,
  _KeyboardContainerPropsModel
>({
  Component: _KeyboardContainer,
});

process.env.APP_DEBUG && (KeyboardContainer.displayName = variableName(() => KeyboardContainer));
