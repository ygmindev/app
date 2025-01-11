import 'react-day-picker/dist/style.css';

import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _CalendarInputPropsModel } from '@lib/frontend/data/components/CalendarInput/_CalendarInput.models';
import { type ComponentType } from 'react';
import { DayPicker, type DayPickerProps } from 'react-day-picker';

export const _CalendarInput = composeComponent<_CalendarInputPropsModel, DayPickerProps>({
  Component: DayPicker as ComponentType,

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
    }) as DayPickerProps,
});
