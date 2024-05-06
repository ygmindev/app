import { type RLFCModel } from '@lib/frontend/core/core.models';
import { _CalendarPicker } from '@lib/frontend/data/components/CalendarPicker/_CalendarPicker';
import {
  type CalendarPickerPropsModel,
  type CalendarPickerRefModel,
} from '@lib/frontend/data/components/CalendarPicker/CalendarPicker.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useThemePresets } from '@lib/frontend/style/hooks/useThemePresets/useThemePresets';
import { forwardRef } from 'react';

export const CalendarPicker: RLFCModel<CalendarPickerRefModel, CalendarPickerPropsModel> =
  forwardRef(({ defaultValue, isRange, onChange, value }, _) => {
    const themePresets = useThemePresets();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });
    return (
      <_CalendarPicker
        {...themePresets}
        isRange={isRange as never}
        onChange={valueControlledSet as never}
        value={valueControlled as never}
      />
    );
  });
