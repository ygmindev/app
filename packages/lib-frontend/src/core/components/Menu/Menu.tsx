import { type ReactElement, type RefObject } from 'react';
import {
  cloneElement,
  createRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { type ScrollView } from 'react-native';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Divider } from '#lib-frontend/core/components/Divider/Divider';
import { Dropdown } from '#lib-frontend/core/components/Dropdown/Dropdown';
import { type DropdownRefModel } from '#lib-frontend/core/components/Dropdown/Dropdown.models';
import {
  type MenuOptionModel,
  type MenuPropsModel,
  type MenuRefModel,
} from '#lib-frontend/core/components/Menu/Menu.models';
import { Modal } from '#lib-frontend/core/components/Modal/Modal';
import { type PressablePropsModel } from '#lib-frontend/core/components/Pressable/Pressable.models';
import { VirtualizedList } from '#lib-frontend/core/components/VirtualizedList/VirtualizedList';
import { type VirtualizedListRefModel } from '#lib-frontend/core/components/VirtualizedList/VirtualizedList.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type RSFCModel } from '#lib-frontend/core/core.models';
import { useIsMobile } from '#lib-frontend/core/hooks/useIsMobile/useIsMobile';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FLEX_ALIGN } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';

export const Menu: RSFCModel<MenuRefModel, MenuPropsModel> = forwardRef(
  (
    {
      anchor,
      direction,
      isFullWidth,
      maxHeight,
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
    const dropdownRef = useRef<DropdownRefModel>(null);
    const virtualizedListRef = useRef<VirtualizedListRefModel>(null);

    useImperativeHandle(ref, () => ({
      isOpen: () => dropdownRef.current?.isOpen() || false,
      scrollTo: (params) =>
        (virtualizedListRef.current?.getScrollableNode() as ScrollView).scrollTo(params),
      toggle: (params) => dropdownRef.current?.toggle(params),
    }));

    const subMenuRefs = useMemo(
      () =>
        options.reduce(
          (result, option) =>
            option.subOptions ? { ...result, [option._id]: createRef<MenuRefModel>() } : result,
          {} as Record<string, RefObject<MenuRefModel>>,
        ),
      [options],
    );

    const handleToggle = (value?: boolean): void => {
      Object.values(subMenuRefs).forEach((v) => v.current?.toggle(false));
      isOpenSet(!!value);
    };

    const handlePressOption = async ({
      _id,
      onPress,
      subOptions,
    }: MenuOptionModel): Promise<void> => {
      if (subOptions) {
        subMenuRefs[_id].current?.toggle(true);
      } else {
        (onPress && (await onPress())) || (onChange && onChange(_id));
      }
      handleToggle(false);
    };

    let anchorF: ReactElement<PressablePropsModel> = anchor(isOpen);
    const { onPress } = anchorF.props;
    anchorF = cloneElement(anchorF, {
      onPress: async () => {
        onPress && (await onPress());
        handleToggle(!isOpen);
      },
    });

    const children = (
      <Wrapper
        flex
        isFullWidth
        s={THEME_SIZE.SMALL}>
        {topElement}

        {options.length && (
          <VirtualizedList
            items={options}
            ref={virtualizedListRef}
            render={(option: MenuOptionModel) => {
              if (option.isDivider) {
                return <Divider key={option._id} />;
              }
              const { _id, color, confirmMessage, elementState, icon, label, subOptions } = option;
              const optionF = (value?: boolean): ReactElement => (
                <Button
                  align={FLEX_ALIGN.FLEX_START}
                  color={color}
                  confirmMessage={confirmMessage}
                  elementState={value ? ELEMENT_STATE.ACTIVE : elementState}
                  icon={icon}
                  isFullWidth
                  key={_id}
                  onPress={subOptions ? undefined : async () => handlePressOption(option)}
                  onPressOut={() => confirmMessage && handleToggle(false)}
                  type={BUTTON_TYPE.INVISIBLE}>
                  {renderOption ? renderOption(option) : label}
                </Button>
              );
              return subOptions ? (
                <Menu
                  anchor={optionF}
                  direction={DIRECTION.LEFT}
                  key={_id}
                  options={subOptions}
                  ref={subMenuRefs[_id]}
                />
              ) : (
                optionF()
              );
            }}
          />
        )}
      </Wrapper>
    );

    return isMobile ? (
      <>
        {anchorF}

        <Modal
          isFullSize={false}
          isOpen={isOpen}
          onToggle={handleToggle}>
          {children}
        </Modal>
      </>
    ) : (
      <Dropdown
        anchor={anchorF}
        direction={direction}
        isFullWidth={isFullWidth}
        isOpen={isOpen}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        onToggle={handleToggle}
        ref={dropdownRef}
        style={styles}
        width={width}>
        {children}
      </Dropdown>
    );
  },
);
