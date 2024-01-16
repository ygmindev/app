import { Button } from '@lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib-frontend/core/components/Button/Button.constants';
import { Dropdown } from '@lib-frontend/core/components/Dropdown/Dropdown';
import { type DropdownRefModel } from '@lib-frontend/core/components/Dropdown/Dropdown.models';
import { Icon } from '@lib-frontend/core/components/Icon/Icon';
import {
  type MenuOptionModel,
  type MenuPropsModel,
  type MenuRefModel,
} from '@lib-frontend/core/components/Menu/Menu.models';
import { Modal } from '@lib-frontend/core/components/Modal/Modal';
import { type PressablePropsModel } from '@lib-frontend/core/components/Pressable/Pressable.models';
import { VirtualizedList } from '@lib-frontend/core/components/VirtualizedList/VirtualizedList';
import { type VirtualizedListRefModel } from '@lib-frontend/core/components/VirtualizedList/VirtualizedList.models';
import { Wrapper } from '@lib-frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '@lib-frontend/core/core.constants';
import { type RLFCPropsModel } from '@lib-frontend/core/core.models';
import { useIsMobile } from '@lib-frontend/core/hooks/useIsMobile/useIsMobile';
import { TranslatableText } from '@lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '@lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib-frontend/style/style.constants';
import { FONT_ALIGN } from '@lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type ForwardedRef, type ReactElement } from 'react';
import { cloneElement, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { type ScrollView } from 'react-native';

export const Menu = forwardRef(
  <TType extends MenuOptionModel = MenuOptionModel>(
    {
      anchor,
      direction,
      elementState,
      isFullWidth,
      onChange,
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
    const [isOpen, isOpenSet] = useState<boolean>(false);
    const dropdownRef = useRef<DropdownRefModel>(null);
    const virtualizedListRef = useRef<VirtualizedListRefModel>(null);

    useImperativeHandle(ref, () => ({
      isOpen: () => dropdownRef.current?.isOpen() || false,
      scrollTo: (params) =>
        (virtualizedListRef.current?.getScrollableNode() as ScrollView).scrollTo(params),
      toggle: (params) => dropdownRef.current?.toggle(params),
    }));

    const handleToggle = (isActive?: boolean): void => isOpenSet(!!isActive);

    const handlePressOption = async ({ id, onPress }: MenuOptionModel): Promise<void> => {
      onPress && (await onPress());
      onChange && onChange(id);
      handleToggle(false);
    };

    const isDisabled = elementState === ELEMENT_STATE.DISABLED;
    let anchorF: ReactElement<PressablePropsModel> = anchor(isOpen);
    const { onPress } = anchorF.props;
    anchorF = cloneElement(anchorF, {
      onPress: async () => {
        if (!isDisabled) {
          onPress && (await onPress());
          handleToggle(!isOpen);
        }
      },
    });

    const children = (
      <Wrapper pVertical={THEME_SIZE.SMALL}>
        <VirtualizedList
          items={options}
          ref={virtualizedListRef}
          render={(option: TType) => {
            const { color, confirmMessage, icon, id, label } = option;
            return (
              <Button
                color={color}
                confirmMessage={confirmMessage}
                elementState={option.elementState}
                icon={icon}
                isFullWidth
                key={id}
                onPress={() => handlePressOption(option)}
                rightElement={value && id === value ? <Icon icon="check" /> : undefined}
                type={BUTTON_TYPE.INVISIBLE}>
                {(renderOption ? renderOption(option) : label) ?? id}
              </Button>
            );
          }}
          s={THEME_SIZE.SMALL}
        />
      </Wrapper>
    );

    return isMobile ? (
      <>
        {anchorF}

        <Modal
          {...wrapperProps}
          isFullSize={false}
          isOpen={isOpen}
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
        isOpen={isOpen}
        onToggle={handleToggle}
        ref={dropdownRef}
        width={width}>
        {title && (
          <Wrapper
            border={DIRECTION.BOTTOM}
            p>
            <TranslatableText align={FONT_ALIGN.CENTER}>{title}</TranslatableText>
          </Wrapper>
        )}

        {children}
      </Dropdown>
    );
  },
) as <TType extends MenuOptionModel = MenuOptionModel>(
  props: RLFCPropsModel<MenuRefModel, MenuPropsModel<TType>>,
) => ReactElement<RLFCPropsModel<MenuRefModel, MenuPropsModel<TType>>>;
