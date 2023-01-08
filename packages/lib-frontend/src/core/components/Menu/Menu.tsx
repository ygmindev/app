import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import type { MenuPropsModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { TranslatableOptionModel } from '@lib/frontend/locale/locale.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { cloneElement, useImperativeHandle, useState } from 'react';

export const Menu: SFCModel<MenuPropsModel> = ({
  anchor,
  forwardedRef,
  isSearchable,
  onChange,
  onClose,
  options,
  renderOption,
  topElement,
  value,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useImperativeHandle(forwardedRef, () => ({
    isOpen: () => isOpen,
    setIsOpen: (value) => setIsOpen(value || false),
  }));

  const _handleClose = (): void => {
    onClose && onClose();
    setIsOpen(false);
  };

  const _handlePress = async ({ id, onPress }: TranslatableOptionModel): Promise<void> => {
    (onPress && (await onPress())) || (onChange && (await onChange(id)));
    _handleClose();
  };

  let _anchor = anchor(isOpen);
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

            const { color, confirmMessage, icon, id, isDisabled, label } = option;
            return (
              <Button
                color={color}
                confirmMessage={confirmMessage}
                icon={icon}
                isDisabled={isDisabled}
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
          isDisabled
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
        onClose={_handleClose}>
        {_children}
      </Modal>
    </>
  ) : (
    <Dropdown
      anchor={_anchor}
      isOpen={isOpen}
      onClose={_handleClose}
      style={styles}>
      {_children}
    </Dropdown>
  );
};
