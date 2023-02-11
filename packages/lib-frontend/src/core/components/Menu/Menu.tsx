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
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { RSFCModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import type { ReactElement } from 'react';
import { cloneElement, forwardRef, useImperativeHandle, useState } from 'react';

export const Menu: RSFCModel<MenuRefModel, MenuPropsModel> = forwardRef(
  (
    { anchor, isSearchable, onChange, onClose, options, renderOption, topElement, value, ...props },
    ref,
  ) => {
    const { t } = useTranslation();
    const { styles } = useStyles({ props });
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
      isOpen: () => isOpen,
      toggle: _handleToggle,
    }));

    const _handleToggle = (value?: boolean): void => {
      !value && onClose && onClose();
      setIsOpen(!!value);
    };

    const _handlePress = async ({ id, onPress }: MenuOptionModel): Promise<void> => {
      (onPress && (await onPress())) || (onChange && (await onChange(id)));
      _handleToggle(false);
    };

    let _anchor: ReactElement<PressablePropsModel> = anchor(isOpen);
    const _onPress = _anchor.props.onPress;
    _anchor = cloneElement(_anchor, {
      onPress: async () => {
        _onPress && (await _onPress());
        setIsOpen(!isOpen);
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

              const { color, confirmMessage, elementState, icon, id, label } = option;
              return (
                <Button
                  color={color}
                  confirmMessage={confirmMessage}
                  elementState={elementState}
                  icon={icon}
                  isFullWidth
                  key={id}
                  onPress={async () => await _handlePress(option)}
                  type={BUTTON_TYPE.TRANSPARENT}>
                  {renderOption ? renderOption(option) : label}
                </Button>
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
        isOpen={isOpen}
        onClose={() => _handleToggle(false)}
        style={styles}>
        {_children}
      </Dropdown>
    );
  },
);
