import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { CalendarPicker } from '@lib/frontend/data/components/CalendarPicker/CalendarPicker';
import {
  type DateInputPropsModel,
  type DateInputRefModel,
} from '@lib/frontend/data/components/DateInput/DateInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { forwardRef, useState } from 'react';

export const DateInput: RLFCModel<DateInputRefModel, DateInputPropsModel> = forwardRef(
  ({ defaultValue, label, onChange, value, ...props }, _) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });
    const [isActive, isActiveSet] = useState<boolean>();
    return (
      <Dropdown
        {...wrapperProps}
        anchor={
          <Button
            icon="calendar"
            onPress={() => isActiveSet(!isActive)}
            type={BUTTON_TYPE.TRANSPARENT}>
            {label}
          </Button>
        }
        isOpen={isActive}
        onToggle={isActiveSet}>
        <CalendarPicker
          isRange={false}
          onChange={valueControlledSet}
          value={valueControlled}
        />
      </Dropdown>
    );
  },
);
