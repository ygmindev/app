import { _Exitable } from '@lib/frontend/animation/components/Exitable/_Exitable';
import { type _ExitablePropsModel } from '@lib/frontend/animation/components/Exitable/_Exitable.models';
import { type ExitablePropsModel } from '@lib/frontend/animation/components/Exitable/Exitable.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const Exitable = composeComponent<ExitablePropsModel, _ExitablePropsModel>({
  Component: _Exitable,
});

process.env.APP_IS_DEBUG && (Exitable.displayName = variableName({ Exitable }));
