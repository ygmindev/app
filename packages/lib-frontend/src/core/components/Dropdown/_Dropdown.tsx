import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import type { _DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/_Dropdown.models';
import { View } from '@lib/frontend/core/components/View/View';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import Tippy from '@tippyjs/react';
import type { Instance } from 'tippy.js';

export const _Dropdown: SFCModel<_DropdownPropsModel> = ({
  anchor,
  children,
  isFullWidth,
  isLeft,
  isOpen,
  isRight,
  isTop,
  maxWidth,
  onClose,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();

  const _handleHide = debounce({
    callback: (instance: Instance) => {
      if (instance.state.isVisible) {
        setTimeout(() => instance.state.isMounted && instance.hide(), theme.animation.duration);
        return false;
      }
    },
    duration: theme.animation.duration,
    isLeading: true,
  });

  return (
    <Tippy
      animation={false}
      appendTo={() => document.body}
      content={<Appearable isActive={isOpen}>{children}</Appearable>}
      ignoreAttributes
      interactive
      maxWidth={maxWidth || '100%'}
      offset={[0, 0]}
      onClickOutside={onClose}
      onHide={_handleHide}
      placement={isLeft ? 'left' : isRight ? 'right' : isTop ? 'top' : 'bottom'}
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
