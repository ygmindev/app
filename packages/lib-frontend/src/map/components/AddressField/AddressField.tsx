import { forwardRef, useState } from 'react';

import { type RLFCModel } from '#lib-frontend/core/core.models';
import { DropdownField } from '#lib-frontend/data/components/DropdownField/DropdownField';
import {
  type AddressFieldPropsModel,
  type AddressFieldRefModel,
} from '#lib-frontend/map/components/AddressField/AddressField.models';
import { useMapQuery } from '#lib-frontend/map/hooks/useMapQuery/useMapQuery';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const AddressField: RLFCModel<AddressFieldRefModel, AddressFieldPropsModel> = forwardRef(
  ({ label, ...props }, _) => {
    const { wrapperProps } = useLayoutStyles({ props });
    const [search, searchSet] = useState<string>();
    const { data, query } = useMapQuery();

    const handleSearch = (v: string): void => {
      console.warn(v);
      searchSet(v);
      void query(v);
    };

    console.warn(data);

    return (
      <DropdownField
        {...wrapperProps}
        icon="location"
        label={label}
        onTextChange={handleSearch}
        options={data.map(({ label }) => ({
          id: label,
          label,
        }))}
        textValue={search}
      />
    );
  },
);
