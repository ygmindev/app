import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { type SearchFieldPropsModel } from '#lib-frontend/search/components/SearchField/SearchField.models';

export const SearchField: SFCModel<SearchFieldPropsModel> = ({ ...props }) => (
  <TextField
    {...props}
    leftElement={<Icon icon="search" />}
  />
);
