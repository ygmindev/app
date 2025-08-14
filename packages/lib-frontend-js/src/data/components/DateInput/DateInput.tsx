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
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
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

  const handleKey = (v: string): void => {
    if (v === '/' && textValue) {
      let [m, d, y] = textValue.split('/');
      if (m?.length === 1) {
        m = `0${m}`;
      }
      if (d?.length === 1) {
        d = `0${d}`;
      }
      textValueSet(`${filterNil([m, d, y]).join('/')}/`);
    }
  };

  const handleValue = (v?: string): void => {
    if (v?.length) {
      const parsed = new DateTime(v);
      if (parsed.isValid()) {
        valueControlledSet(parsed);
        textValueSet(parsed.format());
      } else {
        valueControlledSet(undefined);
        textValueSet(undefined);
      }
    } else {
      valueControlledSet(undefined);
      textValueSet(undefined);
    }
  };

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
          onKey={handleKey}
          onSubmit={(v) => {
            handleValue(v);
            onSubmit?.();
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
