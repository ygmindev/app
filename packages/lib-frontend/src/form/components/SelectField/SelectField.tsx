import type { ReactElement } from 'react';
import { useRef, useState } from 'react';

import { AnimatableView } from '#lib-frontend/animation/components/AnimatableView/AnimatableView';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Menu } from '#lib-frontend/core/components/Menu/Menu';
import type { MenuRefModel } from '#lib-frontend/core/components/Menu/Menu.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import type { SFCPropsModel } from '#lib-frontend/core/core.models';
import type { SelectFieldPropsModel } from '#lib-frontend/form/components/SelectField/SelectField.models';
import { TextField } from '#lib-frontend/form/components/TextField/TextField';
import { useControlledValue } from '#lib-frontend/form/hooks/useControlledValue/useControlledValue';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useSearch } from '#lib-frontend/search/hooks/useSearch/useSearch';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

export const SelectField = <TType extends string = string>({
  defaultValue,
  elementState,
  error,
  icon,
  isAutoFocus,
  isTransparent,
  label,
  onBlur,
  onChange,
  onFocus,
  onSubmit,
  options,
  renderOption,
  renderValue,
  round,
  testID,
  value,
  width,
  ...props
}: SFCPropsModel<SelectFieldPropsModel<TType>>): ReactElement<
  SFCPropsModel<SelectFieldPropsModel<TType>>
> => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const [query, querySet] = useState<string>();
  const { valueControlled, valueControlledSet } = useControlledValue({
    defaultValue,
    onChange,
    value,
  });

  const menuRef = useRef<MenuRefModel>(null);

  const { result, search } = useSearch({
    keys: ['label', 'value'],
    list: options,
    onChange: () => menuRef?.current?.scrollTo({ x: 0, y: 0 }),
  });

  const handleToggle = async (isOpen?: boolean): Promise<void> => {
    await sleep();
    menuRef && menuRef.current && menuRef.current.toggle(isOpen);
    search('');
    querySet('');
  };

  const handleSelect = async (): Promise<void> => {
    const selected = result && result[0];
    const selectedValue = selected.id;
    if (selectedValue) {
      valueControlledSet(selectedValue);
      onSubmit && (await onSubmit(selectedValue));
    }
    handleToggle(false);
  };

  const onQueryChange = (value: string): void => {
    querySet(value);
    search(value);
  };

  const selectedOption = options.find(({ id }) => id === valueControlled);
  const selectedLabel = selectedOption
    ? renderValue
      ? renderValue(selectedOption)
      : renderOption
      ? renderOption(selectedOption)
      : selectedOption.label
    : undefined;

  return (
    <Wrapper
      isFullWidth
      style={styles}>
      <Menu
        anchor={(isOpen) => (
          <TextField
            defaultValue={defaultValue}
            elementState={elementState}
            error={error}
            icon={icon}
            isAutoFocus={isAutoFocus}
            isNoClear
            isTransparent={isTransparent}
            label={label}
            leftElement={
              selectedOption && selectedOption.icon && <Icon icon={selectedOption.icon} />
            }
            onBlur={() => {
              onBlur && onBlur();
              handleToggle(false);
            }}
            onChange={onQueryChange}
            onFocus={() => {
              onFocus && onFocus();
              handleToggle(true);
            }}
            onSubmit={handleSelect}
            rightElement={
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
            }
            round={round}
            testID={testID}
            value={isOpen ? query : t(selectedLabel)}
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
    </Wrapper>
  );
};
