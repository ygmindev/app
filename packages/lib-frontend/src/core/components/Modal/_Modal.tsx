import type { _ModalPropsModel } from '@lib/frontend/core/components/Modal/_Modal.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { useDimension } from '@lib/frontend/platform/hooks/useDimension/useDimension';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { flexStyler } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { spacingStyler } from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler';
import type { ViewStylerParamsModel } from '@lib/frontend/style/utils/styler/viewStyler/viewStyler.models';
import Modal from 'react-native-modal';

export const _Modal: FCModel<_ModalPropsModel> = ({
  children,
  height,
  isDisabled,
  isFullSize,
  isOpen,
  onClose,
  width,
}) => {
  const isMobile = useIsMobile();
  const theme = useTheme();
  const { height: deviceHeight, width: deviceWidth } = useDimension();
  const { styles } = useStyles<ViewStylerParamsModel>({
    props: { justify: FLEX_JUSTIFY.FLEX_END, m: 'auto' },
    stylers: [flexStyler, spacingStyler],
  });

  return (
    <Modal
      animationIn="slideInUp"
      animationInTiming={theme.animation.duration}
      animationOut="slideOutDown"
      animationOutTiming={theme.animation.duration}
      backdropOpacity={0.5}
      backdropTransitionInTiming={theme.animation.duration}
      backdropTransitionOutTiming={theme.animation.duration}
      coverScreen={isFullSize}
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
      hasBackdrop
      hideModalContentWhileAnimating
      isVisible={isOpen}
      onBackdropPress={isDisabled ? undefined : onClose}
      onSwipeComplete={!isDisabled && isMobile ? () => onClose && onClose() : undefined}
      presentationStyle="formSheet"
      style={[
        styles,
        {
          height: isFullSize ? deviceHeight : height,
          maxHeight: isFullSize ? deviceHeight : height,
          width: width || deviceWidth,
        },
      ]}
      supportedOrientations={['portrait', 'landscape']}
      swipeDirection={!isDisabled && isMobile ? 'down' : undefined}>
      {children}
    </Modal>
  );
};
