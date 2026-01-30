import 'react-day-picker/dist/style.css';

import { type FCModel } from '@lib/frontend/core/core.models';
import { type _CalendarInputPropsModel } from '@lib/frontend/data/components/CalendarInput/_CalendarInput.models';
import { GlobalStyle } from '@lib/frontend/style/components/GlobalStyle/GlobalStyle';
import { type DateRange, DayPicker, type ModifiersStyles, type Styles } from 'react-day-picker';

export const _CalendarInput: FCModel<_CalendarInputPropsModel> = ({
  disable = (date) => date < new Date(),
  isRange,
  onChange,
  shapePrimaryMainStyle,
  shapeSecondaryMainStyle,
  textMainStyle,
  value,
}) => (
  <>
    <GlobalStyle
      sheet={`
      .rdp-root {
        --rdp-accent-color: ${shapeSecondaryMainStyle?.backgroundColor as string};
        .rdp-selected {
          background-color: transparent !important;
        }
      }
    `}
    />
    <DayPicker
      captionLayout="dropdown"
      disabled={disable}
      mode={(isRange ? 'range' : 'single') as never}
      modifiersStyles={{ selected: shapePrimaryMainStyle } as ModifiersStyles}
      onSelect={
        isRange
          ? (v?: DateRange) => onChange?.({ max: v?.to, min: v?.from })
          : (v?: Date) => onChange?.(v)
      }
      selected={isRange ? { from: value?.min, to: value?.max } : (value as Date)}
      styles={{ chevron: { ...textMainStyle }, root: { ...textMainStyle } } as Styles}
    />
  </>
);
