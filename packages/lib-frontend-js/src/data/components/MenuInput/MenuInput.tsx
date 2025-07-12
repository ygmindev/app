import { sleepForEffect } from '@lib/frontend/animation/utils/sleepForEffect/sleepForEffect';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import {
  type MenuOptionModel,
  type MenuRefModel,
} from '@lib/frontend/core/components/Menu/Menu.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
import { isAsyncText } from '@lib/frontend/core/utils/isAsyncText/isAsyncText';
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
import find from 'lodash/find';
import lowerCase from 'lodash/lowerCase';
import { type ReactElement, useMemo, useState } from 'react';
import { useRef } from 'react';

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

  const [focused, focusedSet] = useState<number | undefined>();
  const menuRef = useRef<MenuRefModel>(null);

  const { isLoading, query, result, search } = useSearch({
    keys: ['label', 'id'],
    onSearch: () => menuRef.current?.scrollTo({ x: 0, y: 0 }),
    options,
  });

  const { elementStateControlled, elementStateControlledSet, isActive } = useElementStateControlled(
    { elementState, onElementStateChange },
  );

  const [textValue, textValueSet] = useState<string | undefined>(textDefaultValue);

  const handleSubmit = (): void => {
    const queryValue = find(result, ({ id }) => lowerCase(query) === lowerCase(id));
    const selected = queryValue ?? result?.[focused ?? 0];
    const id = selected?.id;
    handleChange(id);
  };

  const handleTextChange = (v: string): void => {
    textValueSet(v);
    void search(v ?? '');
    focusedSet(undefined);
  };

  const rightElementF = (
    <Wrapper
      isAlign
      isRow>
      {rightElement?.(elementStateControlled)}

      {isLoading && <Loading size={THEME_SIZE.SMALL} />}
    </Wrapper>
  );

  const displayLabel = useMemo(
    () =>
      valueControlled
        ? t(renderValue?.(valueControlled) || valueControlled?.label || valueControlled?.id)
        : undefined,
    [valueControlled, t],
  );

  const handleBlur = (): void => {
    handleTextChange('');
    onBlur?.();
  };

  const optionHeight = theme.shape.size[THEME_SIZE.MEDIUM];

  const handleKey = (key: TextInputKeyModel): void => {
    const index = (() => {
      switch (key) {
        case TEXT_INPUT_KEY.UP:
          return focused ? focused - 1 : undefined;
        case TEXT_INPUT_KEY.DOWN:
          return focused === undefined ? 0 : Math.min(focused + 1, result.length - 1);
      }
    })();
    menuRef.current?.scrollTo?.({ y: (index ?? 0) * optionHeight });
    return focusedSet(index);
  };

  const handleChange = (v: string): void => {
    const selectedOption = result.find(({ id }) => id === v);
    valueControlledSet(selectedOption ?? undefined);
    handleBlur();
    void sleepForEffect().then(() => {
      focusedSet(undefined);
      menuRef.current?.toggle(false);
    });
  };

  const inputRef = useRef<TextInputRefModel>(null);
  const inputRefF = ref ?? inputRef;

  const widthF = width ?? theme.layout.width[THEME_SIZE.MEDIUM];

  const renderOptionF = (v: TType): ReactElement => {
    const isActive = v.id === valueControlled?.id;
    const option = renderOption?.(v) ?? v.label ?? v.id;
    const element = isAsyncText(option) ? <AsyncText>{option}</AsyncText> : option;
    return (
      <Wrapper
        isAlign
        isRow>
        {element}

        {isActive && <Icon icon="check" />}
      </Wrapper>
    );
  };

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
          label={label ?? t('core:search')}
          leftElement={
            valueControlled && valueControlled.icon && <Icon icon={valueControlled.icon} />
          }
          onBlur={handleBlur}
          onChange={handleTextChange}
          onFocus={onFocus}
          onKey={result?.length ? handleKey : undefined}
          onSubmit={handleSubmit}
          // placeholder={isActive || !displayLabel ? t('core:search') : t(displayLabel)}
          ref={inputRefF}
          rightElement={rightElementF}
          round={round}
          value={isActive ? textValue : displayLabel}
          width={widthF}
        />
      )}
      elementState={elementStateControlled}
      isFullWidth
      onChange={handleChange}
      onElementStateChange={(v) => {
        elementStateControlledSet(v);
        inputRefF.current?.[v === ELEMENT_STATE.ACTIVE ? 'focus' : 'blur']?.();
      }}
      options={result}
      ref={menuRef}
      renderOption={renderOptionF}
      value={textValue}
    />
  );
};
