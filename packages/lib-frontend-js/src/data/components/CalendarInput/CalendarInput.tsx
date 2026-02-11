import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { _CalendarInput } from '@lib/frontend/data/components/CalendarInput/_CalendarInput';
import {
  type CalendarInputPropsModel,
  type CalendarInputRefModel,
} from '@lib/frontend/data/components/CalendarInput/CalendarInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useThemePresets } from '@lib/frontend/style/hooks/useThemePresets/useThemePresets';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { useState } from 'react';

export const CalendarInput: RLFCModel<CalendarInputRefModel, CalendarInputPropsModel> = ({
  defaultValue,
  isRange,
  label,
  onChange,
  value,
  ...props
}) => {
  const wrapperProps = useLayoutStyles({ props });
  const themePresets = useThemePresets();
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  const [textValue, textValueSet] = useState<string>();

  const handleInputChange = (v?: string): void => {
    if (v) {
      textValueSet(v);
      valueControlledSet(new DateTime(v, { format: 'MM/dd/yyyy' }));
    } else {
      textValueSet(undefined);
      valueControlledSet(undefined);
    }
  };

  const handleValueChange = (v?: Date): void => {
    if (v) {
      valueControlledSet(v);
      textValueSet(new DateTime(v).format('MM/dd/yyyy'));
    } else {
      textValueSet(undefined);
      valueControlledSet(undefined);
    }
  };

  return (
    <Wrapper
      {...wrapperProps}
      p
      s>
      {label && <AsyncText>{label}</AsyncText>}
      <_CalendarInput
        {...themePresets}
        isRange={isRange as never}
        onChange={handleValueChange}
        value={valueControlled as never}
      />
    </Wrapper>
  );
};
