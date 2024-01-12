import toNumber from 'lodash/toNumber';
import { forwardRef } from 'react';

import { type RLFCModel } from '#lib-frontend/core/core.models';
import { DropdownField } from '#lib-frontend/data/components/DropdownField/DropdownField';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import {
  type AddressFieldPropsModel,
  type AddressFieldRefModel,
  type AddressOptionModel,
} from '#lib-frontend/map/components/AddressField/AddressField.models';
import { useMapQuery } from '#lib-frontend/map/hooks/useMapQuery/useMapQuery';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const AddressField: RLFCModel<AddressFieldRefModel, AddressFieldPropsModel> = forwardRef(
  ({ defaultValue, label, onChange, value, ...props }, _) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { data, query } = useMapQuery();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });

    const serialize = ({ latitude, longitude }: Omit<AddressOptionModel, 'id'>): string =>
      `${longitude},${latitude}`;

    const deserialize = (v: string): Omit<AddressOptionModel, 'id'> => {
      const [longitude, latitude] = v.split(',');
      return { latitude: toNumber(latitude), longitude: toNumber(longitude) };
    };

    const optionsF = data.map(({ label, latitude, longitude }) => ({
      id: serialize({ latitude, longitude }),
      label,
      latitude,
      longitude,
    }));

    const handleSearch = (v: string): void => {
      v && void query(v);
    };

    return (
      <DropdownField<AddressOptionModel>
        {...wrapperProps}
        icon="location"
        label={label}
        onChange={(v) => {
          if (v) {
            const { latitude, longitude } = deserialize(v);
            valueControlledSet({ latitude, longitude });
          }
        }}
        onSearch={handleSearch}
        options={optionsF}
        value={valueControlled ? serialize(valueControlled) : undefined}
      />
    );
  },
);
