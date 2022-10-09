import { Appear } from '@lib/frontend/core/components/Appear/Appear';
import type { _DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/_Dropdown.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import Tippy from '@tippyjs/react';
import { set } from 'lodash';
import { View } from 'react-native';
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
        setTimeout(instance.hide, theme.animation.duration);
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
      content={
        <Appear
          isLazy
          isVisible={isOpen}>
          {children}
        </Appear>
      }
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
                fn: ({ state }) =>
                  set(state, 'styles.popper.width', `${state.rects.reference.width}px`),
                name: '',
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
