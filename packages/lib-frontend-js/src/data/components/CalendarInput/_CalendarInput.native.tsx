import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _CalendarInputPropsModel } from '@lib/frontend/data/components/CalendarInput/_CalendarInput.models';
import { Fragment } from 'react';

export const _CalendarInput = composeComponent<_CalendarInputPropsModel, ChildrenPropsModel>({
  Component: Fragment,

  getProps: ({}) => ({
    children: <></>,
  }),
});
