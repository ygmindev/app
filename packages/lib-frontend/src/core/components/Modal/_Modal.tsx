import { Modal, type ModalProps } from 'react-native-paper';

import { type _ModalPropsModel } from '#lib-frontend/core/components/Modal/_Modal.models';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';

export const _Modal = composeComponent<_ModalPropsModel, ModalProps>({
  Component: Modal,

  getProps: ({ children, deviceHeight, deviceWidth, duration, elementState, isOpen, onToggle }) => {
    const isDisabled =
      elementState === ELEMENT_STATE.DISABLED || elementState === ELEMENT_STATE.LOADING;
    return {
      children,
      onDismiss: isDisabled ? undefined : () => onToggle && onToggle(false),
      visible: isOpen ?? false,
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

// import { type ComponentType } from 'react';
// import Modal from 'react-native-modal';

// import { type _ModalPropsModel } from '#lib-frontend/core/components/Modal/_Modal.models';
// import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
// import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
// import { type PartialModel } from '#lib-shared/core/core.models';

// export const _Modal = composeComponent<_ModalPropsModel, PartialModel<typeof Modal.defaultProps>>({
//   Component: Modal as unknown as ComponentType<PartialModel<typeof Modal.defaultProps>>,

//   getProps: ({ children, deviceHeight, deviceWidth, duration, elementState, isOpen, onToggle }) => {
//     const isDisabled =
//       elementState === ELEMENT_STATE.DISABLED || elementState === ELEMENT_STATE.LOADING;
//     return {
//       animationIn: 'slideInUp',
//       animationInTiming: duration,
//       animationOut: 'slideOutDown',
//       animationOutTiming: duration,
//       backdropOpacity: 0.5,
//       backdropTransitionInTiming: duration,
//       backdropTransitionOutTiming: duration,
//       children,
//       coverScreen: true,
//       deviceHeight,
//       deviceWidth,
//       hasBackdrop: true,
//       hideModalContentWhileAnimating: true,
//       isVisible: isOpen,
//       onBackdropPress: isDisabled ? undefined : () => onToggle && onToggle(false),
//       onSwipeComplete: isDisabled ? undefined : () => onToggle && onToggle(false),
//       presentationStyle: 'formSheet',
//       supportedOrientations: ['portrait', 'landscape'],
//       swipeDirection: isDisabled ? undefined : 'down',
//     };
//   },

//   stylers: [
//     ({ deviceHeight, deviceWidth, height, isFullSize, width }) => ({
//       height: isFullSize ? deviceHeight : height,
//       maxHeight: isFullSize ? deviceHeight : height,
//       width: width || deviceWidth,
//     }),
//   ],
// });
