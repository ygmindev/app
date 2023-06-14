import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import type { SFCModel } from '#lib-frontend/core/core.models';
import { TextField } from '#lib-frontend/form/components/TextField/TextField';
import type { SearchFieldPropsModel } from '#lib-frontend/search/components/SearchField/SearchField.models';

export const SearchField: SFCModel<SearchFieldPropsModel> = ({ ...props }) => {
  return (
    <TextField
      {...props}
      rightElement={<Icon icon="search" />}
    />
  );
};
