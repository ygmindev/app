import { _KeyboardContainer } from '@lib/frontend/core/components/KeyboardContainer/_KeyboardContainer';
import { type _KeyboardContainerPropsModel } from '@lib/frontend/core/components/KeyboardContainer/_KeyboardContainer.models';
import { type KeyboardContainerPropsModel } from '@lib/frontend/core/components/KeyboardContainer/KeyboardContainer.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const KeyboardContainer = composeComponent<
  KeyboardContainerPropsModel,
  _KeyboardContainerPropsModel
>({
  Component: _KeyboardContainer,
});

process.env.APP_IS_DEBUG && (KeyboardContainer.displayName = variableName({ KeyboardContainer }));
