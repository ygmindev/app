import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { type CSSProperties } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { type _DropdownPropsModel } from '#lib-frontend/core/components/Dropdown/_Dropdown.models';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const _Dropdown: SFCModel<_DropdownPropsModel> = ({
  anchor,
  children,
  direction,
  isFullWidth,
  isOpen,
  maxHeight,
  maxWidth,
  offset: offsetF,
  onToggle,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { context, floatingStyles, refs } = useFloating({
    middleware: [
      offset(offsetF),
      flip({ fallbackAxisSideDirection: 'end' }),
      shift({ padding: offsetF }),
      size({
        apply({ availableHeight, availableWidth, elements, rects }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${Math.max(maxHeight, availableHeight)}px`,
            maxWidth: `${Math.max(maxWidth, availableWidth)}px`,
            width: isFullWidth ? `${rects.reference.width}px` : undefined,
          });
        },
      }),
    ],
    onOpenChange: onToggle,
    open: isOpen,
    placement: direction,
    whileElementsMounted: autoUpdate,
  });
  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);
  const { getFloatingProps, getReferenceProps } = useInteractions([click, dismiss, role]);
  return (
    <>
      <div
        ref={refs.setReference}
        style={styles as CSSProperties}
        {...getReferenceProps()}>
        {anchor}
      </div>

      <Appearable isActive={isOpen}>
        <FloatingFocusManager
          context={context}
          modal={false}>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}>
            {children}
          </div>
        </FloatingFocusManager>
      </Appearable>
    </>
  );
};

// import { flip, offset } from '@floating-ui/react';
// import { shift, useFloating } from '@floating-ui/react-native';
// import { View } from 'react-native';

// import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
// import { type _DropdownPropsModel } from '#lib-frontend/core/components/Dropdown/_Dropdown.models';
// import { type SFCModel } from '#lib-frontend/core/core.models';

// export const _Dropdown: SFCModel<_DropdownPropsModel> = ({
//   anchor,
//   children,
//   direction,
//   isFullWidth,
//   isOpen,
//   maxWidth,
//   onToggle,
//   ...props
// }) => {
//   const { floatingStyles, refs } = useFloating({
//     middleware: [offset(10), flip({ fallbackAxisSideDirection: 'end' }), shift()],
//     // open: isOpen,
//   });
//   return (
//     <>
//       <View
//         collapsable={false}
//         ref={refs.setReference}>
//         {anchor}
//       </View>

//       <Appearable isActive={isOpen}>
//         <View
//           collapsable={false}
//           ref={refs.setFloating}
//           style={floatingStyles}>
//           {children}
//         </View>
//       </Appearable>
//     </>
//   );
// };

// import Tippy from '@tippyjs/react';
// import { useState } from 'react';
// import { View } from 'react-native';

// import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
// import { sleepForEffect } from '#lib-frontend/animation/utils/sleepForEffect/sleepForEffect';
// import { type _DropdownPropsModel } from '#lib-frontend/core/components/Dropdown/_Dropdown.models';
// import { DIRECTION } from '#lib-frontend/core/core.constants';
// import { type SFCModel } from '#lib-frontend/core/core.models';
// import { useChange } from '#lib-frontend/core/hooks/useChange/useChange';
// import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
// import { THEME_SIZE } from '#lib-frontend/style/style.constants';

// const TippyF = (Tippy as unknown as { default: typeof Tippy }).default ?? Tippy;

// export const _Dropdown: SFCModel<_DropdownPropsModel> = ({
//   anchor,
//   children,
//   direction,
//   isFullWidth,
//   isOpen,
//   maxWidth,
//   onToggle,
//   ...props
// }) => {
//   const { styles } = useStyles({ props });
//   const [isOpenF, isOpenSet] = useState<boolean>(isOpen || false);
//   useChange(isOpen, () => {
//     isOpen ? isOpenSet(true) : void sleepForEffect().then(() => isOpenSet(false));
//   });
//   return (
//     <TippyF
//       animation={false}
//       appendTo={() => document.body}
//       content={
//         <Appearable
//           flex
//           isActive={isOpen}
//           p={THEME_SIZE.SMALL}>
//           {children}
//         </Appearable>
//       }
//       delay={0}
//       ignoreAttributes
//       interactive
//       maxWidth={maxWidth ?? '100%'}
//       offset={[0, 0]}
//       onClickOutside={() => {
//         onToggle(false);
//       }}
//       placement={direction ?? DIRECTION.BOTTOM}
//       popperOptions={{
//         modifiers: isFullWidth
//           ? [
//               {
//                 enabled: true,
//                 fn: ({ state }) => {
//                   state.styles.popper.width = `${state.rects.reference.width}px`;
//                 },
//                 name: 'computeWidth',
//                 phase: 'beforeWrite',
//                 requires: ['computeStyles'],
//               },
//             ]
//           : [],
//       }}
//       visible={isOpenF}>
//       <View style={styles}>{anchor}</View>
//     </TippyF>
//   );
// };
