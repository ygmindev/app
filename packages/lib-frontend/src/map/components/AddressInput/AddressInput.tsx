import { type RLFCModel } from '@lib/frontend/core/core.models';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import {
  type AddressInputPropsModel,
  type AddressInputRefModel,
} from '@lib/frontend/map/components/AddressInput/AddressInput.models';
import { useMapQuery } from '@lib/frontend/map/hooks/useMapQuery/useMapQuery';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { forwardRef, useState } from 'react';

export const AddressInput: RLFCModel<AddressInputRefModel, AddressInputPropsModel> = forwardRef(
  ({ defaultValue, label, onChange, value, ...props }, _) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const [textValue, textValueSet] = useState<string>();
    const { valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });
    const { data, query } = useMapQuery();
    return (
      <MenuInput
        {...wrapperProps}
        icon="location"
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
