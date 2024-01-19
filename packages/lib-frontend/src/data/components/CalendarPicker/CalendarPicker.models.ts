import {
  type _CalendarPickerPropsModel,
  type _CalendarPickerRefModel,
} from '@lib-frontend/data/components/CalendarPicker/_CalendarPicker.models';

export type CalendarPickerPropsModel = Omit<_CalendarPickerPropsModel, 'textStyle'>;

export type CalendarPickerRefModel = _CalendarPickerRefModel;
