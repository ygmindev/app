import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import { _Modal } from '@lib/frontend/core/components/Modal/_Modal';
import type { ModalPropsModel } from '@lib/frontend/core/components/Modal/Modal.models';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '@lib/frontend/core/core.models';
import { lazy } from '@lib/frontend/core/utils/lazy/lazy';
import { KeyboardProvider } from '@lib/frontend/root/providers/KeyboardProvider/KeyboardProvider';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';
import { THEME_RELATIVE_COLOR } from '@lib/frontend/styling/utils/theme/theme.constants';
import { isString } from 'lodash';

const { Press } = lazy(() => import('@lib/frontend/core/components/Press/Press'));

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

  // useChange(isOpen, () => {
  //   tracking &&
  //     track({
  //       object: tracking.object,
  //       action: isOpen ? ANALYTICS_ACTION_OPEN : ANALYTICS_ACTION_CLOSE,
  //       params: tracking.params,
  //     });
  // });

  return (
    <Portal>
      <_Modal
        height={height}
        isDisabled={isDisabled}
        isFullSize={isFullSize}
        isOpen={isOpen}
        onClose={onClose}
        width={width}>
        <Wrapper
          backgroundColor={THEME_RELATIVE_COLOR.MAIN}
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
                  {isString(header) ? <Text isTitle>{header}</Text> : header}
                </Wrapper>
                {onClose && (
                  <Press
                    isDisabled={isDisabled}
                    onPress={onClose}>
                    <Icon
                      color={isDisabled ? THEME_RELATIVE_COLOR.MUTED : undefined}
                      icon={ICON.times}
                      size="l"
                    />
                  </Press>
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
    </Portal>
  );
};
