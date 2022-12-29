import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { SearchFieldPropsModel } from '@lib/frontend/form/components/SearchField/SearchField.models';
import { TextField } from '@lib/frontend/form/components/TextField/TextField';
import { useFieldValue } from '@lib/frontend/form/hooks/useField/useField';

export const SearchField: SFCModel<SearchFieldPropsModel> = ({
  defaultValue,
  onChange,
  testID,
  value,
  ...props
}) => {
  const { fieldValue, setFieldValue } = useFieldValue({ defaultValue, onChange, value });
  return (
    <TextField
      {...props}
      onChange={setFieldValue}
      rightElement={<Icon icon="search" />}
      testID={testID}
      value={fieldValue}
    />
  );
};
