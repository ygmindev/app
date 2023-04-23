import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import type { _DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/_Dropdown.models';
import { View } from '@lib/frontend/core/components/View/View';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import Tippy from '@tippyjs/react';

export const _Dropdown: SFCModel<_DropdownPropsModel> = ({
  anchor,
  children,
  direction,
  isFullWidth,
  isOpen,
  maxWidth,
  onClose,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();

  return (
    <Tippy
      animation
      appendTo={() => document.body}
      content={
        <Appearable
          grow
          isVisible={isOpen}>
          {children}
        </Appearable>
      }
      delay={0}
      ignoreAttributes
      interactive
      maxWidth={maxWidth ?? '100%'}
      offset={direction ? [0, theme.shape.spacing.m] : undefined}
      onClickOutside={onClose}
      placement={direction ?? DIRECTION.BOTTOM}
      popperOptions={{
        modifiers: isFullWidth
          ? [
              {
                enabled: true,
                fn: ({ state }) => {
                  state.styles.popper.width = `${state.rects.reference.width}px`;
                },
                name: 'computeWidth',
                phase: 'beforeWrite',
                requires: ['computeStyles'],
              },
            ]
          : [],
      }}
      visible={isOpen}>
      <View style={styles}>{anchor}</View>
    </Tippy>
  );
};
