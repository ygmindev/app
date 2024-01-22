import { type RLFCModel } from '@lib/frontend/core/core.models';
import { DropdownInput } from '@lib/frontend/data/components/DropdownInput/DropdownInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import {
  type AddressInputPropsModel,
  type AddressInputRefModel,
} from '@lib/frontend/map/components/AddressInput/AddressInput.models';
import { useMapQuery } from '@lib/frontend/map/hooks/useMapQuery/useMapQuery';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { forwardRef, useState } from 'react';

export const AddressInput: RLFCModel<AddressInputRefModel, AddressInputPropsModel> = forwardRef(
  ({ defaultValue, isAutoFocus, label, onChange, value, ...props }, _) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const [textValue, textValueSet] = useState<string>();
    const { valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });
    const { data, query } = useMapQuery();
    return (
      <DropdownInput
        {...wrapperProps}
        icon="location"
        isAutoFocus={isAutoFocus}
        label={label}
        onChange={(v) => {
          const selectedValue = data.find(({ id }) => id === v);
          selectedValue && valueControlledSet(selectedValue);
          textValueSet(v);
        }}
        onSearch={(v) => {
          void query(v);
        }}
        options={data}
        rightElement={() => null}
        value={textValue}
      />
    );
  },
);
