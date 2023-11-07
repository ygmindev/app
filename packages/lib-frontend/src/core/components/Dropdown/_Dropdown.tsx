import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
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
import { useValueDelayed } from '#lib-frontend/core/hooks/useValueDelayed/useValueDelayed';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const _Dropdown: SFCModel<_DropdownPropsModel> = ({
  anchor,
  children,
  delay,
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
  const isOpenF = useValueDelayed(isOpen, delay);
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

      {(isOpen || isOpenF) && (
        <FloatingPortal>
          <FloatingFocusManager
            context={context}
            modal={false}>
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}>
              <Appearable
                animation={{ isInitial: true }}
                isActive={isOpen}>
                {children}
              </Appearable>
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  );
};
