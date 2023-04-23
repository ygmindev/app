import { AnimatableView } from '@lib/frontend/animation/components/AnimatableView/AnimatableView';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import type { MenuRefModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { View } from '@lib/frontend/core/components/View/View';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCPropsModel } from '@lib/frontend/core/core.models';
import type { SelectFieldPropsModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import { TextField } from '@lib/frontend/form/components/TextField/TextField';
import { useControlledValue } from '@lib/frontend/form/hooks/useControlledValue/useControlledValue';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useSearch } from '@lib/frontend/search/hooks/useSearch/useSearch';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import type { ReactElement } from 'react';
import { useRef, useState } from 'react';

export const SelectField = <TType extends string = string>({
  defaultValue,
  elementState,
  error,
  icon,
  isAutoFocus,
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
}: SFCPropsModel<SelectFieldPropsModel<TType>>): ReactElement<
  SFCPropsModel<SelectFieldPropsModel<TType>>
> => {
  const { styles } = useStyles({ props });
  const menuRef = useRef<MenuRefModel>(null);
  const { t } = useTranslation();
  const [query, querySet] = useState<string>();
  const { valueControlled, valueControlledSet } = useControlledValue({
    defaultValue,
    onChange,
    value,
  });

  const { result, search } = useSearch({ keys: ['label', 'value'], list: options });

  const _handleToggle = async (isOpen?: boolean): Promise<void> => {
    await sleep();
    menuRef && menuRef.current && menuRef.current.toggle(isOpen);
    search('');
    querySet('');
  };

  const _handleSelect = async (): Promise<void> => {
    const selected = result && result[0];
    const selectedValue = selected.id;
    if (selectedValue) {
      valueControlledSet(selectedValue);
      onSubmit && (await onSubmit(selectedValue));
    }
    _handleToggle(false);
  };

  const onQueryChange = (value: string): void => {
    querySet(value);
    search(value);
  };

  const _selectedOption = options.find(({ id }) => id === valueControlled);
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
            elementState={elementState}
            error={error}
            icon={icon}
            isAutoFocus={isAutoFocus}
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
            rightElement={(elementState) => (
              <AnimatableView
                animation={{
                  states: {
                    [ELEMENT_STATE.INACTIVE]: { transform: [{ rotateZ: '0deg' }] },
                    [ELEMENT_STATE.ACTIVE]: { transform: [{ rotateZ: '-180deg' }] },
                  },
                }}
                elementState={elementState}>
                <Icon icon="chevronDown" />
              </AnimatableView>
            )}
            value={isOpen ? query : t(_selectedLabel)}
            width={width}
          />
        )}
        isFullWidth
        onChange={valueControlledSet}
        options={result}
        ref={menuRef}
        renderOption={renderOption}
        value={valueControlled}
      />
    </View>
  );
};
