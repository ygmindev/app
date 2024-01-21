import { AnimatableView } from '@lib/frontend/animation/components/AnimatableView/AnimatableView';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Menu } from '@lib/frontend/core/components/Menu/Menu';
import {
  type MenuOptionModel,
  type MenuRefModel,
} from '@lib/frontend/core/components/Menu/Menu.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCPropsModel, type RLFCPropsModel } from '@lib/frontend/core/core.models';
import {
  type DropdownInputPropsModel,
  type DropdownInputRefModel,
} from '@lib/frontend/data/components/DropdownInput/DropdownInput.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { type TextInputRefModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useSearch } from '@lib/frontend/search/hooks/useSearch/useSearch';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import find from 'lodash/find';
import lowerCase from 'lodash/lowerCase';
import { type ForwardedRef, forwardRef, type ReactElement, useState } from 'react';
import { useImperativeHandle, useRef } from 'react';

export const DropdownInput = forwardRef(
  <TType extends MenuOptionModel = MenuOptionModel>(
    {
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
      onTextChange,
      options,
      renderOption,
      renderValue,
      rightElement,
      round,
      value,
      width,
      ...props
    }: LFCPropsModel<DropdownInputPropsModel<TType>>,
    ref: ForwardedRef<DropdownInputRefModel>,
  ): ReactElement<RLFCPropsModel<DropdownInputRefModel, DropdownInputPropsModel<TType>>> => {
    const { wrapperProps } = useLayoutStyles({ props });
    const { t } = useTranslation();
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });
    const menuRef = useRef<MenuRefModel>(null);
    const inputRef = useRef<TextInputRefModel>(null);

    useImperativeHandle(ref, () => ({
      beforeSubmit: inputRef.current?.beforeSubmit,
      blur: () => inputRef.current?.blur,
      focus: () => inputRef.current?.focus,
      submit: inputRef.current?.submit,
    }));

    const { query, result, search } = useSearch<TType>({
      items: options.map(({ label, ...option }) => ({
        ...option,
        label: label ? t(label) : undefined,
      })) as Array<TType>,
      keys: ['label', 'id'],
      onChange: () => menuRef.current?.scrollTo({ x: 0, y: 0 }),
    });
    const optionsF = result.length > 0 ? result : options;
    const [textValue, textValueSet] = useState<string>();

    const handleToggle = (isOpen?: boolean): void => {
      menuRef.current?.toggle(isOpen);
      search('');
    };

    const handleSelect = (): void => {
      const queryValue = find(optionsF, ({ id }) => lowerCase(query) === lowerCase(id));
      const selected = queryValue ?? (optionsF && optionsF[0]);
      const id = selected?.id;
      if (id) {
        valueControlledSet(id);
        onSubmit && onSubmit();
      }
      handleToggle(false);
      inputRef.current?.blur();
    };

    const selectedOption = options.find(({ id }) => id === valueControlled);
    const displayLabel = renderValue
      ? renderValue(valueControlled)
      : selectedOption
        ? renderOption
          ? renderOption(selectedOption)
          : selectedOption.label ?? selectedOption.id
        : undefined;

    const handleQuery = (v: string): void => {
      textValueSet(v);
      onTextChange && onTextChange(v);
    };

    const handleChange = (v: string): void => {
      valueControlledSet(v);
      inputRef.current?.blur();
      handleToggle(false);
    };

    const rightElementF = rightElement ? (
      rightElement(elementState)
    ) : (
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
    );

    const handleFocus = (): void => {
      onFocus && onFocus();
      menuRef.current?.toggle(true);
    };

    return (
      <Menu
        anchor={(isOpen) => (
          <TextInput
            {...wrapperProps}
            defaultValue={defaultValue}
            elementState={elementState}
            error={error}
            icon={icon}
            isAutoFocus={isAutoFocus}
            isTransparent={isTransparent}
            label={label}
            leftElement={
              selectedOption && selectedOption.icon && <Icon icon={selectedOption.icon} />
            }
            onBlur={onBlur}
            onChange={handleQuery}
            onFocus={handleFocus}
            onSubmit={handleSelect}
            ref={inputRef}
            rightElement={isOpen ? rightElementF : displayLabel ? <Icon icon="edit" /> : null}
            round={round}
            value={isOpen ? textValue : t(displayLabel)}
            width={width}
          />
        )}
        elementState={elementState}
        isFullWidth
        onChange={handleChange}
        options={optionsF}
        ref={menuRef}
        renderOption={renderOption}
        value={valueControlled}
      />
    );
  },
) as <TType extends MenuOptionModel = MenuOptionModel>(
  props: RLFCPropsModel<DropdownInputRefModel, DropdownInputPropsModel<TType>>,
) => ReactElement<RLFCPropsModel<DropdownInputRefModel, DropdownInputPropsModel<TType>>>;
