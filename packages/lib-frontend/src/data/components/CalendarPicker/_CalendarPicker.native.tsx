import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _CalendarPickerPropsModel } from '@lib/frontend/data/components/CalendarPicker/_CalendarPicker.models';
import { Fragment } from 'react';

export const _CalendarPicker = composeComponent<_CalendarPickerPropsModel, ChildrenPropsModel>({
  Component: Fragment,

  getProps: ({}) => ({
    children: <></>,
  }),
});
