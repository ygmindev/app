import { _PressableView } from '@lib/frontend/core/components/PressableView/_PressableView';
import { type _PressableViewPropsModel } from '@lib/frontend/core/components/PressableView/_PressableView.models';
import { type PressableViewPropsModel } from '@lib/frontend/core/components/PressableView/PressableView.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const PressableView = composeComponent<PressableViewPropsModel, _PressableViewPropsModel>({
  Component: _PressableView,
});

process.env.APP_IS_DEBUG && (PressableView.displayName = variableName({ PressableView }));
