import { composeComponent } from '@lib-frontend/core/utils/composeComponent/composeComponent';
import { type _CalendarPickerPropsModel } from '@lib-frontend/data/components/CalendarPicker/_CalendarPicker.models';
import CalendarPicker, { type CalendarPickerProps } from 'react-native-calendar-picker';

export const _CalendarPicker = composeComponent<_CalendarPickerPropsModel, CalendarPickerProps>({
  Component: CalendarPicker,

  getProps: ({ isRange, onChange, textStyle, value }) => ({
    allowRangeSelection: isRange,
    customDatesStyles: () => ({ textStyle }),
    customDayHeaderStyles: () => ({ textStyle }),
    onDateChange: (date, type) =>
      onChange &&
      (isRange
        ? onChange({
            max: type === 'START_DATE' ? value?.max : date,
            min: type === 'END_DATE' ? value?.min : date,
          })
        : onChange(value as Date)),
    selectedEndDate: isRange ? value?.max : undefined,
    selectedStartDate: isRange ? value?.min : value,
  }),
});
