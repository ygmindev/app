import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import type { SearchFieldPropsModel } from '@lib/frontend/core/components/SearchField/SearchField.models';
import { TextField } from '@lib/frontend/core/components/TextField/TextField';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useField } from '@lib/frontend/core/hooks/useField/useField';

export const SearchField: SFCModel<SearchFieldPropsModel> = ({
  defaultValue,
  onChange,
  testID,
  value,
  ...props
}) => {
  const { fieldValue, setFieldValue } = useField({ defaultValue, onChange, value });
  return (
    <TextField
      {...props}
      onChange={setFieldValue}
      rightElement={<Icon icon={ICON.search} />}
      testID={testID}
      value={fieldValue}
    />
  );
};
