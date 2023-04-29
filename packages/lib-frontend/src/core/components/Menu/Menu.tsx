import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import { DROPDOWN_MAX_HEIGHT } from '@lib/frontend/core/components/Dropdown/Dropdown.constants';
import type { DropdownRefModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import type {
  MenuOptionModel,
  MenuPropsModel,
  MenuRefModel,
} from '@lib/frontend/core/components/Menu/Menu.models';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import type { PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { VirtualizedList } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList';
import type { VirtualizedListRefModel } from '@lib/frontend/core/components/VirtualizedList/VirtualizedList.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { RSFCModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import type { ReactElement, RefObject } from 'react';
import {
  cloneElement,
  createRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

export const Menu: RSFCModel<MenuRefModel, MenuPropsModel> = forwardRef(
  (
    {
      anchor,
      direction,
      isFullWidth,
      maxHeight = DROPDOWN_MAX_HEIGHT,
      maxWidth,
      onChange,
      options,
      renderOption,
      topElement,
      width,
      ...props
    },
    ref,
  ) => {
    const { styles } = useStyles({ props });
    const isMobile = useIsMobile();
    const [isOpen, isOpenSet] = useState<boolean>(false);
    const _dropdownRef = useRef<DropdownRefModel>(null);
    const _virtualizedListRef = useRef<VirtualizedListRefModel>(null);

    useImperativeHandle(ref, () => ({
      isOpen: () => _dropdownRef.current?.isOpen() || false,
      scrollTo: (params) => _virtualizedListRef.current?.getScrollableNode().scrollTo(params),
      toggle: (params) => _dropdownRef.current?.toggle(params),
    }));

    const subMenuRefs = useMemo(
      () =>
        options.reduce(
          (result, option) =>
            option.subOptions ? { ...result, [option.id]: createRef<MenuRefModel>() } : result,
          {} as Record<string, RefObject<MenuRefModel>>,
        ),
      [options],
    );

    const _handleToggle = (value?: boolean): void => {
      Object.values(subMenuRefs).forEach((v) => v.current?.toggle(false));
      isOpenSet(!!value);
    };

    const _handlePressOption = async ({
      id,
      onPress,
      subOptions,
    }: MenuOptionModel): Promise<void> => {
      if (subOptions) {
        subMenuRefs[id].current?.toggle(true);
      } else {
        (onPress && (await onPress())) || (onChange && onChange(id));
      }
      _handleToggle(false);
    };

    let _anchor: ReactElement<PressablePropsModel> = anchor(isOpen);
    const _onPress = _anchor.props.onPress;
    _anchor = cloneElement(_anchor, {
      onPress: async () => {
        _onPress && (await _onPress());
        _handleToggle(!isOpen);
      },
    });

    const _children = (
      <Wrapper
        grow
        shrink
        spacing={THEME_SIZE.SMALL}>
        {topElement}

        <VirtualizedList
          items={options}
          ref={_virtualizedListRef}
          render={(option: MenuOptionModel) => {
            if (option.isDivider) {
              return <Divider key={option.id} />;
            }
            const { color, confirmMessage, elementState, icon, id, label, subOptions } = option;
            const _option = (value?: boolean): ReactElement => (
              <Button
                align={FLEX_ALIGN.FLEX_START}
                color={color}
                confirmMessage={confirmMessage}
                elementState={value ? ELEMENT_STATE.ACTIVE : elementState}
                icon={icon}
                isFullWidth
                key={id}
                onPress={subOptions ? undefined : async () => await _handlePressOption(option)}
                onPressOut={() => confirmMessage && _handleToggle(false)}
                type={BUTTON_TYPE.TRANSPARENT}>
                {renderOption ? renderOption(option) : label}
              </Button>
            );
            return subOptions ? (
              <Menu
                anchor={_option}
                direction={DIRECTION.LEFT}
                key={id}
                options={subOptions}
                ref={subMenuRefs[id]}
              />
            ) : (
              _option()
            );
          }}
        />
      </Wrapper>
    );

    return isMobile ? (
      <>
        {_anchor}

        <Modal
          isFullSize={false}
          isOpen={isOpen}
          onClose={() => _handleToggle(false)}>
          {_children}
        </Modal>
      </>
    ) : (
      <Dropdown
        anchor={_anchor}
        direction={direction}
        isFullWidth={isFullWidth}
        isOpen={isOpen}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        onToggle={_handleToggle}
        ref={_dropdownRef}
        style={styles}
        width={width}>
        {_children}
      </Dropdown>
    );
  },
);
