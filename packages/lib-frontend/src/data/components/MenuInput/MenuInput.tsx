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
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useSearch } from '@lib/frontend/search/hooks/useSearch/useSearch';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import find from 'lodash/find';
import lowerCase from 'lodash/lowerCase';
import { type ForwardedRef, forwardRef, type ReactElement, useState } from 'react';
import { useRef } from 'react';

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
      const selected = queryValue ?? (optionsF && optionsF[0]);
      const id = selected?.id;
      id && valueControlledSet(id);
    };

    const handleTextChange = (v: string): void => {
      textValueSet(v);
      (onSearch ?? search)(v);
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

    return (
      <Menu
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
            onElementStateChange={onElementStateChangeF}
            onFocus={onFocus}
            onSubmit={handleSubmit}
            ref={ref}
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
        isDismiss={false}
        isFullWidth
        isPressable={false}
        onChange={valueControlledSet}
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
