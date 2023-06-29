import Tippy from '@tippyjs/react';
import { useState } from 'react';
import { View } from 'react-native';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { type _DropdownPropsModel } from '#lib-frontend/core/components/Dropdown/_Dropdown.models';
import { DIRECTION } from '#lib-frontend/core/core.constants';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useChange } from '#lib-frontend/core/hooks/useChange/useChange';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

const TippyF = (Tippy as unknown as { default: typeof Tippy }).default ?? Tippy;

export const _Dropdown: SFCModel<_DropdownPropsModel> = ({
  anchor,
  children,
  direction,
  isFullWidth,
  isOpen,
  maxWidth,
  onToggle,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const [isOpenF, isOpenSet] = useState<boolean>(isOpen || false);
  useChange(isOpen, () => {
    isOpen ? isOpenSet(true) : void sleep(theme.animation.duration).then(() => isOpenSet(false));
  });
  return (
    <TippyF
      animation={false}
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
      onClickOutside={() => {
        onToggle(false);
      }}
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
      visible={isOpenF}>
      <View style={styles}>{anchor}</View>
    </TippyF>
  );
};
