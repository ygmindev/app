import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import type { MenuRefModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { Rotate } from '@lib/frontend/core/components/Rotate/Rotate';
import type { SelectFieldPropsModel } from '@lib/frontend/core/components/SelectField/SelectField.models';
import { TextField } from '@lib/frontend/core/components/TextField/TextField';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useField } from '@lib/frontend/core/hooks/useField/useField';
import { useSearch } from '@lib/frontend/core/hooks/useSearch/useSearch';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { find } from 'lodash';
import { useRef, useState } from 'react';

export const SelectField: SFCModel<SelectFieldPropsModel> = ({
  defaultValue,
  error,
  icon,
  isAutoFocus,
  isDisabled,
  label,
  onChange,
  onSubmit,
  options,
  renderOption,
  renderValue,
  testID,
  value,
  width,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const menuRef = useRef<MenuRefModel>(null);
  const { t } = useTranslation();

  const [query, setQuery] = useState<string>();
  const { fieldValue, setFieldValue } = useField({ defaultValue, onChange, value });

  const { result, search } = useSearch({ keys: ['label', 'value'], list: options });

  const _handleToggle = (isOpen: boolean): void => {
    search('');
    setQuery('');
    menuRef && menuRef.current && menuRef.current.setIsOpen(isOpen);
  };

  const _handleSelect = async (): Promise<void> => {
    const selected = result && result[0];
    const selectedValue = selected.id;
    if (selectedValue) {
      setFieldValue(selectedValue);
      onSubmit && onSubmit(selectedValue);
    }
    await sleep();
    _handleToggle(false);
  };

  const onQueryChange = (value: string): void => {
    setQuery(value);
    search(value);
  };

  const selectedOption = find(options, { id: fieldValue });

  const selectedLabel = selectedOption
    ? renderValue
      ? renderValue(selectedOption)
      : renderOption
      ? renderOption(selectedOption)
      : selectedOption.label
    : undefined;

  return (
    <Wrapper
      style={styles}
      testID={testID}>
      <Menu
        anchor={(isOpen) => (
          <TextField
            defaultValue={defaultValue}
            error={error}
            icon={icon}
            isAutoFocus={isAutoFocus}
            isDisabled={isDisabled}
            isNoClear
            label={label}
            leftElement={
              selectedOption && selectedOption.icon && <Icon icon={selectedOption.icon} />
            }
            onBlur={() => _handleToggle(false)}
            onChange={onQueryChange}
            onFocus={() => _handleToggle(true)}
            onSubmit={_handleSelect}
            rightElement={(isFocused) => (
              <Rotate z={isFocused ? -180 : 0}>
                <Icon icon={ICON.chevronDown} />
              </Rotate>
            )}
            value={isOpen ? query : t(selectedLabel)}
            width={width}
          />
        )}
        forwardedRef={menuRef}
        isFullWidth
        onChange={isDisabled ? undefined : setFieldValue}
        onClose={() => _handleToggle(false)}
        options={result}
        renderOption={renderOption}
        value={fieldValue}
      />
    </Wrapper>
  );
};
