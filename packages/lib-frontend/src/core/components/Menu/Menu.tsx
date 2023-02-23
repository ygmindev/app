import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import type {
  MenuOptionModel,
  MenuPropsModel,
  MenuRefModel,
} from '@lib/frontend/core/components/Menu/Menu.models';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import type { PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { RSFCModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import type { ReactElement, RefObject } from 'react';
import { cloneElement, createRef, forwardRef, useImperativeHandle, useMemo, useState } from 'react';

export const Menu: RSFCModel<MenuRefModel, MenuPropsModel> = forwardRef(
  (
    {
      anchor,
      direction,
      isSearchable,
      onChange,
      onClose,
      options,
      renderOption,
      topElement,
      value,
      ...props
    },
    ref,
  ) => {
    const { t } = useTranslation();
    const { styles } = useStyles({ props });
    const isMobile = useIsMobile();
    const [isOpen, isOpenSet] = useState<boolean>(false);

    const subMenuRefs = useMemo(
      () =>
        options.reduce(
          (result, option) =>
            option.subOptions ? { ...result, [option.id]: createRef<MenuRefModel>() } : result,
          {} as Record<string, RefObject<MenuRefModel>>,
        ),
      [options],
    );

    useImperativeHandle(ref, () => ({
      isOpen: () => isOpen,
      toggle: _handleToggle,
    }));

    const _handleToggle = (value?: boolean): void => {
      Object.values(subMenuRefs).forEach((v) => v.current?.toggle(false));
      !value && onClose && onClose();
      isOpenSet(!!value);
    };

    const _handlePress = async ({ id, onPress, subOptions }: MenuOptionModel): Promise<void> => {
      if (subOptions) {
        subMenuRefs[id].current?.toggle(true);
      } else {
        (onPress && (await onPress())) || (onChange && onChange(id));
        _handleToggle(false);
      }
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
      <Wrapper spacing={THEME_SIZE.SMALL}>
        {topElement}

        {/* {isSearchable && <SearchField isAutoFocus />} */}

        {/* TODO: searchable */}

        {options.length ? (
          options.map(
            (option) => {
              if (option.isDivider) {
                return <Divider key={option.id} />;
              }

              const { color, confirmMessage, elementState, icon, id, label, subOptions } = option;
              const _option = (value?: boolean): ReactElement => (
                <Button
                  color={color}
                  confirmMessage={confirmMessage}
                  elementState={value ? ELEMENT_STATE.ACTIVE : elementState}
                  icon={icon}
                  isFullWidth
                  key={id}
                  onPress={() => _handlePress(option)}
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
            },
            [value],
          )
        ) : (
          <Button
            elementState={ELEMENT_STATE.DISABLED}
            type={BUTTON_TYPE.TRANSPARENT}>
            {t('core:labels.noResult')}
          </Button>
        )}
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
        isOpen={isOpen}
        onClose={() => _handleToggle(false)}
        style={styles}>
        {_children}
      </Dropdown>
    );
  },
);
