import { type RLFCModel } from '@lib/frontend/core/core.models';
import { DropdownInput } from '@lib/frontend/data/components/DropdownInput/DropdownInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import {
  type AddressInputPropsModel,
  type AddressInputRefModel,
  type AddressOptionModel,
} from '@lib/frontend/map/components/AddressInput/AddressInput.models';
import {
  deserializeAddress,
  serializeAddress,
  useMapQuery,
} from '@lib/frontend/map/hooks/useMapQuery/useMapQuery';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { forwardRef } from 'react';

export const AddressInput: RLFCModel<AddressInputRefModel, AddressInputPropsModel> = forwardRef(
  ({ defaultValue, label, onChange, value, ...props }, _) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { data, query } = useMapQuery();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });

    const optionsF = data.map(({ label, latitude, longitude }) => ({
      id: serializeAddress({ label, latitude, longitude }),
      label,
      latitude,
      longitude,
    }));

    const handleSearch = (v: string): void => {
      v && void query(v);
    };

    return (
      <DropdownInput<AddressOptionModel>
        {...wrapperProps}
        icon="location"
        label={label}
        onChange={(v) => {
          if (v) {
            const { label, latitude, longitude } = deserializeAddress(v);
            valueControlledSet({ id: v, label, latitude, longitude });
          }
        }}
        onSearch={handleSearch}
        options={optionsF}
        renderValue={(v) => v && deserializeAddress(v).label}
        value={valueControlled ? serializeAddress(valueControlled) : undefined}
      />
    );
  },
);
