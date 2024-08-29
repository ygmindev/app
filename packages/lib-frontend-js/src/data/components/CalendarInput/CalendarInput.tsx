import { type RLFCModel } from '@lib/frontend/core/core.models';
import { _CalendarInput } from '@lib/frontend/data/components/CalendarInput/_CalendarInput';
import {
  type CalendarInputPropsModel,
  type CalendarInputRefModel,
} from '@lib/frontend/data/components/CalendarInput/CalendarInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useThemePresets } from '@lib/frontend/style/hooks/useThemePresets/useThemePresets';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { forwardRef } from 'react';

export const CalendarInput: RLFCModel<CalendarInputRefModel, CalendarInputPropsModel> = forwardRef(
  ({ defaultValue, isRange, onChange, value }, _) => {
    const themePresets = useThemePresets();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });
    return (
      <_CalendarInput
        {...themePresets}
        isRange={isRange as never}
        onChange={valueControlledSet as never}
        value={valueControlled as never}
      />
    );
  },
);

process.env.APP_IS_DEBUG && (CalendarInput.displayName = variableName({ CalendarInput }));
