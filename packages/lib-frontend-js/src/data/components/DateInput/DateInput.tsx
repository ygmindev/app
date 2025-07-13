import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
import { CalendarInput } from '@lib/frontend/data/components/CalendarInput/CalendarInput';
import {
  type DateInputPropsModel,
  type DateInputRefModel,
} from '@lib/frontend/data/components/DateInput/DateInput.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { dateTimeFormat } from '@lib/shared/data/utils/dateTimeFormat/dateTimeFormat';
import { useState } from 'react';

export const DateInput: RLFCModel<DateInputRefModel, DateInputPropsModel> = ({
  defaultValue,
  elementState,
  label,
  onChange,
  onElementStateChange,
  onSubmit,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [textValue, textValueSet] = useState<string>();
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  const { elementStateControlled, elementStateControlledSet, isActive } = useElementStateControlled(
    { elementState, onElementStateChange },
  );

  return (
    <Dropdown
      {...wrapperProps}
      anchor={
        <TextInput
          elementState={elementStateControlled}
          icon="calendar"
          label={label}
          mask="[00]{/}[00]{/}[0000]"
          onChange={textValueSet}
          onClear={() => valueControlledSet(undefined)}
          onSubmit={(v) => {
            if (v?.length) {
              const parsed = Date.parse(v);
              if (!isNaN(parsed) && parsed > 0) {
                const value = new Date(parsed);
                valueControlledSet(value);
                textValueSet(dateTimeFormat(value));
                onSubmit?.();
              } else {
                textValueSet(undefined);
                valueControlledSet(undefined);
              }
            } else {
              valueControlledSet(undefined);
              textValueSet(undefined);
            }
            elementStateControlledSet(ELEMENT_STATE.INACTIVE);
          }}
          value={textValue}
        />
      }
      isOpen={isActive}
      onToggle={(v) =>
        elementStateControlledSet(v ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.INACTIVE)
      }>
      <CalendarInput
        isRange={false}
        onChange={(v) => {
          valueControlledSet(v);
          elementStateControlledSet(ELEMENT_STATE.INACTIVE);
        }}
        value={valueControlled}
      />
    </Dropdown>
  );
};

process.env.APP_IS_DEBUG && (DateInput.displayName = variableName({ DateInput }));
