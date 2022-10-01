import { Appear } from '@lib/frontend/core/components/Appear/Appear';
import type { _DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/_Dropdown.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import Tippy from '@tippyjs/react';
import { set } from 'lodash';
import { View } from 'react-native';

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
  return (
    <Tippy
      appendTo={() => document.body}
      content={
        <Appear
          isLazy
          isVisible={isOpen}>
          {children}
        </Appear>
      }
      delay={10}
      duration={theme.animation.duration}
      ignoreAttributes
      interactive
      maxWidth={maxWidth || '100%'}
      offset={[0, 0]}
      onClickOutside={onClose}
      placement={isLeft ? 'left' : isRight ? 'right' : isTop ? 'top' : 'bottom'}
      popperOptions={{
        modifiers: isFullWidth
          ? [
              { enabled: false, name: 'flip' },
              {
                enabled: true,
                fn: ({ state }) =>
                  set(state, 'styles.popper.width', `${state.rects.reference.width}px`),
                name: '',
                phase: 'beforeWrite',
                requires: ['computeStyles'],
              },
            ]
          : [{ enabled: false, name: 'flip' }],
      }}
      visible={isOpen}>
      <View style={{ ...styles, alignSelf: 'center' }}>{anchor}</View>
    </Tippy>
  );
};
