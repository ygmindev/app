import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { CalendarPicker } from '@lib/frontend/data/components/CalendarPicker/CalendarPicker';
import {
  type DateInputPropsModel,
  type DateInputRefModel,
} from '@lib/frontend/data/components/DateInput/DateInput.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { dateTimeFormat } from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat';
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
          <Wrapper position={SHAPE_POSITION.RELATIVE}>
            <Wrapper
              isAbsoluteFill
              zIndex
            />

            <TextInput
              elementState={isActive ? ELEMENT_STATE.ACTIVE : undefined}
              icon="calendar"
              isNoClear
              label={label}
              value={dateTimeFormat(valueControlled)}
            />
          </Wrapper>
        }
        isOpen={isActive}
        onToggle={isActiveSet}>
        <CalendarPicker
          isRange={false}
          onChange={(v) => {
            isActiveSet(false);
            valueControlledSet(v);
          }}
          value={valueControlled}
        />
      </Dropdown>
    );
  },
);
