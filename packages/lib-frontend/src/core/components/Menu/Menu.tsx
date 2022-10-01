import { Button } from '@lib/frontend/core/components/Button/Button';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import type {
  DividerOptionModel,
  MenuPropsModel,
} from '@lib/frontend/core/components/Menu/Menu.models';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import { Press } from '@lib/frontend/core/components/Press/Press';
import { SearchField } from '@lib/frontend/core/components/SearchField/SearchField';
import type { SelectOptionModel } from '@lib/frontend/core/components/SelectField/SelectField.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { promisify } from '@lib/shared/core/utils/promisify/promisify';
import { isFunction } from 'lodash';
import { cloneElement, useImperativeHandle, useState } from 'react';

export const Menu: SFCModel<MenuPropsModel> = ({
  anchor,
  forwardedRef,
  // TODO: add search
  isCenter = true,
  isFullWidth,
  isSearchable,
  onChange,
  onClose,
  options,
  renderOption,
  value,
  ...props
}) => {
  const { t } = useTranslation();

  const { styles } = useStyles({ props });
  const isMobile = useIsMobile();
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const _handleClose = (): unknown =>
    setTimeout(() => {
      setIsOpen(false);
      onClose && onClose();
    }, theme.animation.duration);

  let anchorPress = isFunction(anchor) ? anchor(isOpen) : anchor;
  const _onPress = anchorPress.props.onPress;
  anchorPress = cloneElement(anchorPress, {
    onPress: async () => {
      _onPress && (await promisify(_onPress)());
      setIsOpen(!isOpen);
    },
  });

  const _handlePress = (option: SelectOptionModel): void => {
    option.onPress ? option.onPress() : onChange && onChange(option.id);
    _handleClose();
  };

  useImperativeHandle(forwardedRef, () => ({
    isOpen: () => isOpen,
    setIsOpen,
  }));

  const elements = options.map(
    (option) => {
      if ((option as DividerOptionModel).isDivider) {
        return <Divider key={option.id} />;
      }

      const { color, confirmMessage, icon, id, isDisabled, label } = option as SelectOptionModel;
      return (
        <Button
          color={color}
          confirmMessage={confirmMessage}
          icon={icon}
          isCenter={isCenter}
          isDisabled={isDisabled}
          isFullWidth
          isTransparent
          key={option.id}
          onPress={() => _handlePress(option as SelectOptionModel)}
          // right={
          //   value === id && (
          //     <Icon
          //       color={color}
          //       icon={ICON.check}
          //     />
          //   )
          // }
        >
          {renderOption ? renderOption(option as SelectOptionModel) : label}
        </Button>
      );
    },
    [value],
  );

  const children = (
    <Wrapper spacing="s">
      {isSearchable && <SearchField isAutoFocus />}
      {options.length ? (
        elements
      ) : (
        <Press isDisabled>
          <Text color="muted">{t('core:labels.noResult')}</Text>
        </Press>
      )}
    </Wrapper>
  );

  return isMobile ? (
    <>
      {anchorPress}
      <Modal
        isFullSize={false}
        isOpen={isOpen}
        onClose={_handleClose}>
        {children}
      </Modal>
    </>
  ) : (
    <Dropdown
      anchor={anchorPress}
      isFullWidth={isFullWidth}
      isOpen={isOpen}
      onClose={_handleClose}
      style={styles}>
      {children}
    </Dropdown>
  );
};
