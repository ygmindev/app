import searchConfig from '@lib/config/search/search/search';
import { Rotatable } from '@lib/frontend/animation/components/Rotatable/Rotatable';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import {
  type MenuOptionModel,
  type MenuRefModel,
} from '@lib/frontend/core/components/Menu/Menu.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCPropsModel, type RLFCPropsModel } from '@lib/frontend/core/core.models';
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
import { type ForwardedRef, forwardRef, type ReactElement, useState } from 'react';
import { useCallback, useImperativeHandle, useRef } from 'react';

export const MenuInput = forwardRef(
  <TType extends MenuOptionModel = MenuOptionModel>(
    {
      defaultValue,
      elementState,
      error,
      icon,
      isTransparent,
      label,
      onBlur,
      onChange,
      onElementStateChange,
      onFocus,
      onSearch,
      options,
      renderOption,
      renderValue,
      rightElement,
      round,
      textDefaultValue,
      value,
      width,
      ...props
    }: LFCPropsModel<MenuInputPropsModel<TType>>,
    ref: ForwardedRef<MenuInputRefModel>,
  ): ReactElement<RLFCPropsModel<MenuInputRefModel, MenuInputPropsModel<TType>>> => {
    const { wrapperProps } = useLayoutStyles({ props });
    const theme = useTheme();
    const { t } = useTranslation();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });
    const { valueControlled: elementStateF, valueControlledSet: onElementStateChangeF } =
      useValueControlled({
        onChange: onElementStateChange,
        value: elementState,
      });

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
      id && valueControlledSet(id);
      focusedSet(undefined);
    };

    const { delay } = searchConfig.params();
    const handleSearch = useCallback(
      debounce(onSearch ?? ((_: string) => null), { duration: delay }),
      [delay, onSearch],
    );

    const handleTextChange = (v: string): void => {
      textValueSet(v);
      (handleSearch ?? search)(v);
      focusedSet(undefined);
    };

    const rightElementF = rightElement ? (
      rightElement(elementStateF)
    ) : (
      <Rotatable elementState={elementStateF}>
        <Icon icon="chevronDown" />
      </Rotatable>
    );

    const selectedOption = options.find(({ id }) => id === valueControlled);
    const displayLabel = renderValue
      ? renderValue(valueControlled)
      : selectedOption
        ? renderOption
          ? renderOption(selectedOption)
          : selectedOption.label ?? selectedOption.id
        : valueControlled;

    const handleBlur = (): void => {
      onBlur && onBlur();
      handleTextChange('');
    };

    const isActive = elementStateF === ELEMENT_STATE.ACTIVE;

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
      menuRef.current?.scrollTo({ y: (index ?? 0) * optionHeight });
      return focusedSet(index);
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
            defaultValue={defaultValue}
            elementState={elementStateF}
            error={error}
            icon={icon}
            isTransparent={isTransparent}
            label={label}
            leftElement={
              selectedOption && selectedOption.icon && <Icon icon={selectedOption.icon} />
            }
            onBlur={handleBlur}
            onChange={handleTextChange}
            onFocus={onFocus}
            onKey={optionsF?.length ? handleKey : undefined}
            onSubmit={handleSubmit}
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
        elementState={elementStateF}
        isFullWidth
        onChange={valueControlledSet}
        onElementStateChange={onElementStateChangeF}
        options={optionsF}
        ref={menuRef}
        renderOption={renderOption}
        value={valueControlled}
      />
    );
  },
) as <TType extends MenuOptionModel = MenuOptionModel>(
  props: RLFCPropsModel<MenuInputRefModel, MenuInputPropsModel<TType>>,
) => ReactElement<RLFCPropsModel<MenuInputRefModel, MenuInputPropsModel<TType>>>;
