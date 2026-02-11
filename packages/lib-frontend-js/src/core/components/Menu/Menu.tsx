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
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { type ReactElement } from 'react';
import { cloneElement, useImperativeHandle, useRef } from 'react';

export const Menu = <TType extends MenuOptionModel = MenuOptionModel>({
  active,
  anchor,
  direction,
  elementState,
  isFullWidth,
  maxHeight,
  onChange,
  onElementStateChange,
  options,
  ref,
  renderOption,
  title,
  value,
  width,
  ...props
}: RLFCPropsModel<MenuRefModel, MenuPropsModel<TType>>): ReactElement<
  RLFCPropsModel<MenuRefModel, MenuPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const isMobile = useIsMobile();
  const theme = useTheme();
  const dropdownRef = useRef<DropdownRefModel>(null);

  const { elementStateControlledSet, isActive, isBlocked } = useElementStateControlled({
    elementState,
    onElementStateChange,
  });

  useImperativeHandle(ref, () => ({
    scrollTo: (params) => dropdownRef.current?.scrollTo(params),
    toggle: handleToggle,
  }));

  const handleToggle = (v?: boolean): void =>
    elementStateControlledSet(v ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.INACTIVE);

  const handlePressOption = async ({ id, onPress }: MenuOptionModel): Promise<void> => {
    onPress && (await onPress());
    onChange && onChange(id);
    handleToggle(false);
  };

  let anchorF: ReactElement<PressablePropsModel> = anchor(isActive);

  const { onPress } = anchorF.props;
  anchorF = cloneElement(anchorF, {
    onPress: async () => {
      if (!isBlocked) {
        await onPress?.();
        handleToggle(!isActive);
      }
    },
    testID: anchorF.props.testID ?? `${props.testID}-toggle`,
  });

  const maxHeightF =
    maxHeight ?? theme.layout.height[isMobile ? THEME_SIZE.LARGE : THEME_SIZE.SMALL];

  const children = (
    <VirtualizedList
      itemSize={theme.shape.size[THEME_SIZE.MEDIUM]}
      items={options}
      maxHeight={maxHeightF}
      pTop={THEME_SIZE.SMALL}
      render={(option: TType, index) => {
        const { color, confirmMessage, icon, id, label } = option;
        return (
          <Button
            color={color}
            confirmMessage={confirmMessage}
            elementState={
              (active ?? 0) >= 0 && index === active ? ELEMENT_STATE.ACTIVE : option.elementState
            }
            icon={icon}
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
            testID={`menu-option-${id}`}
            type={BUTTON_TYPE.INVISIBLE}>
            {(renderOption ? renderOption(option) : label) ?? id}
          </Button>
        );
      }}
      s={THEME_SIZE.SMALL}
      testID={props.testID ? `${props.testID}-body` : undefined}
    />
  );

  return isMobile ? (
    <>
      {anchorF}

      <Modal
        {...wrapperProps}
        isFullSize={false}
        isOpen={isActive}
        maxHeight={maxHeightF}
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
      isFullWidth={isFullWidth}
      isHidden={!options?.length}
      isOpen={isActive}
      maxHeight={maxHeightF}
      minWidth={theme.shape.width[THEME_SIZE.LARGE]}
      onToggle={handleToggle}
      ref={dropdownRef}
      width={width}>
      {title && (
        <Wrapper
          border={DIRECTION.BOTTOM}
          mBottom={THEME_SIZE.SMALL}
          p
          testID={props.testID ? `${props.testID}-title` : undefined}>
          <AsyncText align={FONT_ALIGN.CENTER}>{title}</AsyncText>
        </Wrapper>
      )}

      {children}
    </Dropdown>
  );
};
