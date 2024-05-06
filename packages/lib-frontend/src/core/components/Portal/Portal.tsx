import { _Portal } from '@lib/frontend/core/components/Portal/_Portal';
import { type _PortalPropsModel } from '@lib/frontend/core/components/Portal/_Portal.models';
import { type PortalPropsModel } from '@lib/frontend/core/components/Portal/Portal.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const Portal = composeComponent<PortalPropsModel, _PortalPropsModel>({
  Component: _Portal,
});

process.env.APP_IS_DEBUG && (Portal.displayName = variableName({ Portal }));
