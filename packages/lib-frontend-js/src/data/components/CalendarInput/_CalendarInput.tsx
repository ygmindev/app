import 'react-day-picker/dist/style.css';

import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _CalendarInputPropsModel } from '@lib/frontend/data/components/CalendarInput/_CalendarInput.models';
import { DayPicker, type DayPickerRangeProps, type DayPickerSingleProps } from 'react-day-picker';

export const _CalendarInput = composeComponent<
  _CalendarInputPropsModel,
  DayPickerSingleProps | DayPickerRangeProps
>({
  Component: DayPicker,

  getProps: ({
    disable = (date) => date < new Date(),
    isRange,
    onChange,
    shapePrimaryMainStyle,
    textMainStyle,
    value,
  }) =>
    ({
      disabled: disable,
      hideHead: true,
      mode: isRange ? 'range' : 'single',
      modifiersStyles: { selected: shapePrimaryMainStyle },
      onSelect: onChange,
      selected: value,
      styles: { caption: { ...textMainStyle }, root: { ...textMainStyle } },
    }) as DayPickerSingleProps | DayPickerRangeProps,
});
