import { type ReactElement } from 'react';
import { useRef } from 'react';

import { AnimatableView } from '#lib-frontend/animation/components/AnimatableView/AnimatableView';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Menu } from '#lib-frontend/core/components/Menu/Menu';
import { type MenuRefModel } from '#lib-frontend/core/components/Menu/Menu.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { type SelectFieldPropsModel } from '#lib-frontend/data/components/SelectField/SelectField.models';
import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useSearch } from '#lib-frontend/search/hooks/useSearch/useSearch';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
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
}: LFCPropsModel<SelectFieldPropsModel<TType>>): ReactElement<
  LFCPropsModel<SelectFieldPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation();
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });

  const menuRef = useRef<MenuRefModel>(null);

  const { query, result, search } = useSearch({
    keys: ['label', '_id'],
    list: options.map(({ label, ...option }) => ({ ...option, label: t(label) })),
    onChange: () => menuRef.current?.scrollTo({ x: 0, y: 0 }),
  });

  const handleToggle = (isOpen?: boolean): void => {
    void sleep(100).then(() => {
      menuRef.current?.toggle(isOpen);
      search('');
    });
  };

  const handleSelect = (): void => {
    const selected = result && result[0];
    const selectedValue = selected._id;
    if (selectedValue) {
      valueControlledSet(selectedValue);
      onSubmit && onSubmit();
    }
    handleToggle(false);
  };

  const selectedOption = options.find(({ _id }) => _id === valueControlled);
  const selectedLabel = selectedOption
    ? renderValue
      ? renderValue(selectedOption)
      : renderOption
      ? renderOption(selectedOption)
      : selectedOption.label
    : undefined;

  return (
    <Wrapper
      {...wrapperProps}
      grow>
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
              void handleToggle(false);
            }}
            onChange={search}
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
