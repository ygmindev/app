import { AnimatableView } from '@lib/frontend/animation/components/AnimatableView/AnimatableView';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import type { MenuRefModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { View } from '@lib/frontend/core/components/View/View';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useSearch } from '@lib/frontend/core/hooks/useSearch/useSearch';
import type { SelectFieldPropsModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import { TextField } from '@lib/frontend/form/components/TextField/TextField';
import { useFieldValue } from '@lib/frontend/form/hooks/useField/useField';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
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
  const { fieldValue, setFieldValue } = useFieldValue({ defaultValue, onChange, value });

  const { result, search } = useSearch({ keys: ['label', 'value'], list: options });

  const _handleToggle = (isOpen?: boolean): void => {
    search('');
    setQuery('');
    menuRef && menuRef.current && menuRef.current.setIsOpen(isOpen);
  };

  const _handleSelect = async (): Promise<void> => {
    const selected = result && result[0];
    const selectedValue = selected.id;
    if (selectedValue) {
      setFieldValue(selectedValue);
      onSubmit && (await onSubmit(selectedValue));
    }
    _handleToggle(false);
  };

  const onQueryChange = (value: string): void => {
    setQuery(value);
    search(value);
  };

  const _selectedOption = find(options, { id: fieldValue });
  const _selectedLabel = _selectedOption
    ? renderValue
      ? renderValue(_selectedOption)
      : renderOption
      ? renderOption(_selectedOption)
      : _selectedOption.label
    : undefined;

  return (
    <View
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
              _selectedOption &&
              _selectedOption.icon &&
              (() => <Icon icon={_selectedOption.icon} />)
            }
            onBlur={() => _handleToggle(false)}
            onChange={onQueryChange}
            onFocus={() => _handleToggle(true)}
            onSubmit={_handleSelect}
            rightElement={(isFocused) => (
              <AnimatableView
                animation={{
                  from: { transform: [{ rotateZ: '0deg' }] },
                  isActive: isFocused,
                  to: { transform: [{ rotateZ: '-180deg' }] },
                }}>
                <Icon icon="chevronDown" />
              </AnimatableView>
            )}
            value={isOpen ? query : t(_selectedLabel)}
            width={width}
          />
        )}
        forwardedRef={menuRef}
        isFullWidth
        onChange={isDisabled ? undefined : setFieldValue}
        onClose={() => _handleToggle(false)}
        options={result}
        renderOption={renderOption}
        style={styles}
        testID={testID}
        value={fieldValue}
      />
    </View>
  );
};
