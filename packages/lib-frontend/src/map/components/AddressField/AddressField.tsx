import { forwardRef, useState } from 'react';

import { type RLFCModel } from '#lib-frontend/core/core.models';
import { DropdownField } from '#lib-frontend/data/components/DropdownField/DropdownField';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import {
  type AddressFieldPropsModel,
  type AddressFieldRefModel,
} from '#lib-frontend/map/components/AddressField/AddressField.models';
import { useMapQuery } from '#lib-frontend/map/hooks/useMapQuery/useMapQuery';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const AddressField: RLFCModel<AddressFieldRefModel, AddressFieldPropsModel> = forwardRef(
  ({ defaultValue, label, onChange, value, ...props }, _) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const [search, searchSet] = useState<string>();
    const { data, query } = useMapQuery();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });

    const handleSearch = (v: string): void => {
      searchSet(v);
      v && void query(v);
    };

    return (
      <DropdownField
        {...wrapperProps}
        icon="location"
        label={label}
        onChange={valueControlledSet}
        onTextChange={handleSearch}
        options={data.map(({ label }) => ({ id: label, label }))}
        textValue={search}
        value={valueControlled}
      />
    );
  },
);
