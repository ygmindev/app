import { _Swipeable } from '@lib/frontend/core/components/Swipeable/_Swipeable';
import { type _SwipeablePropsModel } from '@lib/frontend/core/components/Swipeable/_Swipeable.models';
import { type SwipeablePropsModel } from '@lib/frontend/core/components/Swipeable/Swipeable.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const Swipeable = composeComponent<SwipeablePropsModel, _SwipeablePropsModel>({
  Component: _Swipeable,

  getProps: ({ children }) => ({
    children,
  }),
});

process.env.APP_IS_DEBUG && (Swipeable.displayName = variableName({ Swipeable }));
