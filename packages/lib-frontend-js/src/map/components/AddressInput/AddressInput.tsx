import { type RLFCModel } from '@lib/frontend/core/core.models';
import { MenuInput } from '@lib/frontend/data/components/MenuInput/MenuInput';
import { type MenuInputRefModel } from '@lib/frontend/data/components/MenuInput/MenuInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import {
  type AddressInputPropsModel,
  type AddressInputRefModel,
} from '@lib/frontend/map/components/AddressInput/AddressInput.models';
import { useMapQuery } from '@lib/frontend/map/hooks/useMapQuery/useMapQuery';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useImperativeHandle, useRef, useState } from 'react';

export const AddressInput: RLFCModel<AddressInputRefModel, AddressInputPropsModel> = ({
  defaultValue,
  label,
  onChange,
  ref,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [textValue, textValueSet] = useState<string | undefined>(defaultValue?.name);
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  const { data, query } = useMapQuery();
  const options = data.map((v) => ({ ...v, id: v.name ?? '' }));
  const inputRef = useRef<MenuInputRefModel>(null);

  useImperativeHandle(ref, () => ({
    ...inputRef.current,
    beforeSubmit: async () => {
      if (valueControlled) {
        const { id: _, ...valueControlledF } = valueControlled;
        return valueControlledF;
      }
      return valueControlled;
    },
  }));

  return (
    <MenuInput
      {...wrapperProps}
      icon="location"
      label={label}
      onChange={(v) => {
        const selectedValue = options.find(({ id }) => id === v);
        selectedValue && valueControlledSet(selectedValue);
        textValueSet(v);
      }}
      onSearch={(v) => {
        void query(v);
      }}
      options={options}
      ref={inputRef}
      rightElement={() => null}
      value={textValue}
    />
  );
};
