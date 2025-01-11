import 'react-day-picker/dist/style.css';

import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _CalendarInputPropsModel } from '@lib/frontend/data/components/CalendarInput/_CalendarInput.models';
import { type ComponentType } from 'react';
import { DayPicker, type PropsRange, type PropsSingle } from 'react-day-picker';

export const _CalendarInput = composeComponent<_CalendarInputPropsModel, PropsSingle | PropsRange>({
  Component: DayPicker as ComponentType<PropsSingle | PropsRange>,

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
    }) as PropsSingle | PropsRange,
});
