import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICONS } from '@lib/frontend/core/components/Icon/Icon.constants';
import { _Modal } from '@lib/frontend/core/components/Modal/_Modal';
import type { ModalPropsModel } from '@lib/frontend/core/components/Modal/Modal.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '@lib/frontend/core/core.models';
import { KeyboardProvider } from '@lib/frontend/root/providers/KeyboardProvider/KeyboardProvider';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { FONT_TYPE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { isString } from 'lodash';

export const Modal: FCModel<ModalPropsModel> = ({
  children,
  header,
  height,
  isDisabled,
  isFullSize,
  isOpen,
  onClose,
  width,
  // tracking,
}) => {
  // const { track } = useTracking();
  const theme = useTheme();

  return (
    <_Modal
      height={height}
      isDisabled={isDisabled}
      isFullSize={isFullSize}
      isOpen={isOpen}
      onClose={onClose}
      width={width}>
      <Wrapper
        backgroundColor={THEME_COLOR.NEUTRAL}
        grow={isFullSize}
        isFullWidth
        isShadow
        style={{
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
        }}>
        <KeyboardProvider>
          <Wrapper
            grow
            p
            position={SHAPE_POSITION.RELATIVE}
            spacing>
            <Wrapper isRowAlign>
              <Wrapper
                grow
                isRowAlign>
                {isString(header) ? <Text type={FONT_TYPE.TITLE}>{header}</Text> : header}
              </Wrapper>

              {onClose && (
                <Icon
                  icon={ICONS.times}
                  isDisabled={isDisabled}
                  onPress={onClose}
                  type={FONT_TYPE.TITLE}
                />
              )}
            </Wrapper>

            <Wrapper
              grow
              isCenter>
              {children}
            </Wrapper>
          </Wrapper>
        </KeyboardProvider>
      </Wrapper>
    </_Modal>
  );
};
