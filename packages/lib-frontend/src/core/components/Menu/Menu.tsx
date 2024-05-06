import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import { type DropdownRefModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import {
  type MenuOptionModel,
  type MenuPropsModel,
  type MenuRefModel,
} from '@lib/frontend/core/components/Menu/Menu.models';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import { type PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { type ForwardedRef, type ReactElement } from 'react';
import { cloneElement, forwardRef, useImperativeHandle, useRef } from 'react';

export const Menu = forwardRef(
  <TType extends MenuOptionModel = MenuOptionModel>(
    {
      anchor,
      direction,
      elementState,
      focused,
      isDismiss = true,
      isFullWidth,
      isPressable = true,
      onChange,
      onElementStateChange,
      options,
      renderOption,
      title,
      value,
      width,
      ...props
    }: RLFCPropsModel<MenuRefModel, MenuPropsModel<TType>>,
    ref: ForwardedRef<MenuRefModel>,
  ): ReactElement<RLFCPropsModel<MenuRefModel, MenuPropsModel<TType>>> => {
    const { wrapperProps } = useLayoutStyles({ props });
    const isMobile = useIsMobile();
    const dropdownRef = useRef<DropdownRefModel>(null);

    const { valueControlled: elementStateF, valueControlledSet: onElementStateChangeF } =
      useValueControlled({
        onChange: onElementStateChange,
        value: elementState,
      });

    useImperativeHandle(ref, () => ({
      scrollTo: (params) => dropdownRef.current?.scrollTo(params),
      toggle: (params) => dropdownRef.current?.toggle(params),
    }));

    const handleToggle = (v?: boolean): void =>
      onElementStateChangeF(v ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.INACTIVE);

    const handlePressOption = async ({ id, onPress }: MenuOptionModel): Promise<void> => {
      onPress && (await onPress());
      onChange && onChange(id);
      handleToggle(false);
    };

    const isDisabled = elementStateF === ELEMENT_STATE.DISABLED;
    const isActive = elementStateF === ELEMENT_STATE.ACTIVE;
    let anchorF: ReactElement<PressablePropsModel> = anchor(isActive);

    if (isPressable) {
      const { onPress } = anchorF.props;
      anchorF = cloneElement(anchorF, {
        onPress: async () => {
          if (!isDisabled) {
            onPress && (await onPress());
            handleToggle(elementStateF !== ELEMENT_STATE.ACTIVE);
          }
        },
      });
    }

    const children = (
      <VirtualizedList
        items={options}
        pTop={THEME_SIZE.SMALL}
        render={(option: TType, index) => {
          const { color, confirmMessage, icon, id, label } = option;
          return (
            <Button
              color={color}
              confirmMessage={confirmMessage}
              elementState={
                (focused ?? 0) >= 0 && index === focused
                  ? ELEMENT_STATE.ACTIVE
                  : option.elementState
              }
              icon={icon}
              isFullWidth
              key={id}
              onPress={() => handlePressOption(option)}
              rightElement={
                value && id === value ? (
                  <Wrapper
                    bottom={0}
                    position={SHAPE_POSITION.ABSOLUTE}
                    right={0}
                    top={0}>
                    <Icon icon="check" />
                  </Wrapper>
                ) : undefined
              }
              type={BUTTON_TYPE.INVISIBLE}>
              {(renderOption ? renderOption(option) : label) ?? id}
            </Button>
          );
        }}
        s={THEME_SIZE.SMALL}
      />
    );
    return isMobile ? (
      <>
        {anchorF}

        <Modal
          {...wrapperProps}
          isFullSize={false}
          isOpen={isActive}
          onToggle={handleToggle}
          title={title}>
          {children}
        </Modal>
      </>
    ) : (
      <Dropdown
        {...wrapperProps}
        anchor={anchorF}
        direction={direction}
        isDismiss={isDismiss}
        isFullWidth={isFullWidth}
        isHidden={!options?.length}
        isOpen={isActive}
        onToggle={handleToggle}
        ref={dropdownRef}
        width={width}>
        {title && (
          <Wrapper
            border={DIRECTION.BOTTOM}
            p>
            <AsyncText align={FONT_ALIGN.CENTER}>{title}</AsyncText>
          </Wrapper>
        )}

        {children}
      </Dropdown>
    );
  },
) as <TType extends MenuOptionModel = MenuOptionModel>(
  props: RLFCPropsModel<MenuRefModel, MenuPropsModel<TType>>,
) => ReactElement<RLFCPropsModel<MenuRefModel, MenuPropsModel<TType>>>;
