import type { _ModalPropsModel } from '@lib/frontend/core/components/Modal/_Modal.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { PartialModel } from '@lib/shared/core/core.models';
import type { ComponentType } from 'react';
import Modal from 'react-native-modal';

export const _Modal = composeComponent<_ModalPropsModel, PartialModel<typeof Modal.defaultProps>>({
  Component: Modal as unknown as ComponentType<PartialModel<typeof Modal.defaultProps>>,

  getProps: ({ children, deviceHeight, deviceWidth, duration, elementState, isOpen, onClose }) => {
    const isDisabled =
      elementState === ELEMENT_STATE.DISABLED || elementState === ELEMENT_STATE.LOADING;
    return {
      animationIn: 'slideInUp',
      animationInTiming: duration,
      animationOut: 'slideOutDown',
      animationOutTiming: duration,
      backdropOpacity: 0.5,
      backdropTransitionInTiming: duration,
      backdropTransitionOutTiming: duration,
      children,
      coverScreen: true,
      deviceHeight,
      deviceWidth,
      hasBackdrop: true,
      hideModalContentWhileAnimating: true,
      isVisible: isOpen,
      onBackdropPress: isDisabled ? undefined : onClose,
      onSwipeComplete: isDisabled ? undefined : () => onClose && onClose(),
      presentationStyle: 'formSheet',
      supportedOrientations: ['portrait', 'landscape'],
      swipeDirection: isDisabled ? undefined : 'down',
    };
  },

  stylers: [
    ({ deviceHeight, deviceWidth, height, isFullSize, width }) => ({
      height: isFullSize ? deviceHeight : height,
      maxHeight: isFullSize ? deviceHeight : height,
      width: width || deviceWidth,
    }),
  ],
});
