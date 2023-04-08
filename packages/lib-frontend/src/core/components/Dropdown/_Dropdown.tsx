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
  direction = DIRECTION.BOTTOM,
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
          animation={{ isLazy: false }}
          isVisible={isOpen}>
          {children}
        </Appearable>
      }
      delay={[0, theme.animation.duration]}
      ignoreAttributes
      interactive
      maxWidth={maxWidth || '100%'}
      offset={[theme.shape.spacing.m, theme.shape.spacing.m]}
      onClickOutside={onClose}
      placement={direction}
      popperOptions={{
        modifiers: isFullWidth
          ? [
              {
                enabled: true,
                fn: ({ state }) => {
                  state.styles.popper.width = `${state.rects.reference.width}px`;
                },
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
