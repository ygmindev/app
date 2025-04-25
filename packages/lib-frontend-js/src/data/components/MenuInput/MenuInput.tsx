import searchConfig from '@lib/config/search/search/search';
import { Rotatable } from '@lib/frontend/animation/components/Rotatable/Rotatable';
import { sleepForEffect } from '@lib/frontend/animation/utils/sleepForEffect/sleepForEffect';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import {
  type MenuOptionModel,
  type MenuRefModel,
} from '@lib/frontend/core/components/Menu/Menu.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
import {
  type MenuInputPropsModel,
  type MenuInputRefModel,
} from '@lib/frontend/data/components/MenuInput/MenuInput.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { TEXT_INPUT_KEY } from '@lib/frontend/data/components/TextInput/TextInput.constants';
import {
  type TextInputKeyModel,
  type TextInputRefModel,
} from '@lib/frontend/data/components/TextInput/TextInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useSearch } from '@lib/frontend/search/hooks/useSearch/useSearch';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import find from 'lodash/find';
import lowerCase from 'lodash/lowerCase';
import { type ReactElement, useState } from 'react';
import { useCallback, useImperativeHandle, useRef } from 'react';

export const MenuInput = <TType extends MenuOptionModel = MenuOptionModel>({
  defaultValue,
  elementState,
  error,
  icon = 'search',
  isTransparent,
  label,
  onBlur,
  onChange,
  onElementStateChange,
  onFocus,
  onSearch,
  options,
  ref,
  renderOption,
  renderValue,
  rightElement,
  round,
  textDefaultValue,
  value,
  width,
  ...props
}: RLFCPropsModel<MenuInputRefModel, MenuInputPropsModel<TType>>): ReactElement<
  RLFCPropsModel<MenuInputRefModel, MenuInputPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const { t } = useTranslation();
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  const { elementStateControlled, elementStateControlledSet, isActive } = useElementStateControlled(
    {
      elementState,
      onElementStateChange,
    },
  );
  const [selectedOption, selectedOptionSet] = useState<TType>();

  const [focused, focusedSet] = useState<number | undefined>();
  const menuRef = useRef<MenuRefModel>(null);

  const { query, result, search } = useSearch<TType>({
    items: options.map(({ label, ...option }) => ({
      ...option,
      label: label ? t(label) : undefined,
    })) as Array<TType>,
    keys: ['label', 'id'],
    onChange: () => menuRef.current?.scrollTo({ x: 0, y: 0 }),
  });

  const optionsF = result.length > 0 ? result : options;

  const [textValue, textValueSet] = useState<string | undefined>(textDefaultValue);

  const handleSubmit = (): void => {
    const queryValue = find(optionsF, ({ id }) => lowerCase(query) === lowerCase(id));
    const selected = queryValue ?? (optionsF && optionsF[focused ?? 0]);
    const id = selected?.id;
    handleChange(id);
  };

  const { delay, minLength } = searchConfig.params();
  const handleSearch = useCallback(
    debounce((v?: string) => (v?.length ?? 0) >= minLength && (onSearch ? onSearch(v) : null), {
      duration: delay,
    }),
    [delay, minLength, onSearch],
  );

  const handleTextChange = (v: string): void => {
    textValueSet(v);
    (handleSearch ?? search)(v);
    focusedSet(undefined);
  };

  const rightElementF = rightElement ? (
    rightElement(elementStateControlled)
  ) : (
    <Rotatable isActive={isActive}>
      <Icon icon="chevronDown" />
    </Rotatable>
  );

  const displayLabel =
    renderValue?.(selectedOption) ?? selectedOption?.label ?? selectedOption?.id ?? valueControlled;

  const handleBlur = (): void => {
    onBlur && onBlur();
    handleTextChange('');
  };

  const optionHeight = theme.shape.size[THEME_SIZE.MEDIUM];

  const handleKey = (key: TextInputKeyModel): void => {
    const index = (() => {
      switch (key) {
        case TEXT_INPUT_KEY.UP:
          return focused ? focused - 1 : undefined;
        case TEXT_INPUT_KEY.DOWN:
          return focused === undefined ? 0 : Math.min(focused + 1, optionsF.length - 1);
      }
    })();
    menuRef.current?.scrollTo?.({ y: (index ?? 0) * optionHeight });
    return focusedSet(index);
  };

  const handleChange = (v: string): void => {
    selectedOptionSet(options.find(({ id }) => id === v));
    valueControlledSet(v);
    handleBlur();
    void sleepForEffect().then(() => focusedSet(undefined));
  };

  const inputRef = useRef<TextInputRefModel>(null);

  useImperativeHandle(ref, () => ({
    ...inputRef.current,
  }));

  return (
    <Menu
      active={focused}
      anchor={() => (
        <TextInput
          {...wrapperProps}
          elementState={elementStateControlled}
          error={error}
          icon={icon}
          isTransparent={isTransparent}
          label={label}
          leftElement={selectedOption && selectedOption.icon && <Icon icon={selectedOption.icon} />}
          // onBlur={handleBlur}
          onChange={handleTextChange}
          onFocus={onFocus}
          onKey={optionsF?.length ? handleKey : undefined}
          onSubmit={handleSubmit}
          placeholder={displayLabel ? t(displayLabel) : t('core:search')}
          ref={inputRef}
          rightElement={
            <Wrapper
              isAlign
              isRow>
              {valueControlled && (
                <Icon
                  fontSize={THEME_SIZE.SMALL}
                  icon="edit"
                />
              )}

              {rightElementF}
            </Wrapper>
          }
          round={round}
          value={isActive ? textValue : t(displayLabel)}
          width={width}
        />
      )}
      elementState={elementStateControlled}
      isFullWidth
      onChange={handleChange}
      onElementStateChange={(v) => {
        v && inputRef.current?.focus?.();
        elementStateControlledSet(v);
      }}
      options={optionsF}
      ref={menuRef}
      renderOption={renderOption}
      value={valueControlled}
    />
  );
};
