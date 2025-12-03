import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { type ButtonGroupPropsModel } from '@lib/frontend/core/components/ButtonGroup/ButtonGroup.models';
import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import { ModalFormButton } from '@lib/frontend/core/containers/ModalFormButton/ModalFormButton';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import isNumber from 'lodash/isNumber';
import { cloneElement, useMemo } from 'react';

export const ButtonGroup: LFCModel<ButtonGroupPropsModel> = ({
  children,
  height,
  size = THEME_SIZE.MEDIUM,
  type,
  ...props
}) => {
  const theme = useTheme();

  const heightF = useMemo(
    () =>
      (isNumber(height) ? height : (height ?? theme.shape.size[size as THEME_SIZE])) -
      theme.shape.spacing[
        size === THEME_SIZE.LARGE || (size as THEME_SIZE_MORE) === THEME_SIZE_MORE.XLARGE
          ? THEME_SIZE.MEDIUM
          : (size as THEME_SIZE)
      ],
    [height, size],
  );

  return (
    <Button
      {...props}
      align={FLEX_ALIGN.CENTER}
      height={height}
      isRow
      p={THEME_SIZE.SMALL}
      s={THEME_SIZE.SMALL}
      size={size}
      type={type}>
      {children.map((child, i) =>
        cloneElement(
          child,
          child.type === Button || child.type === ModalButton || child.type === ModalFormButton
            ? {
                ...props,
                height: heightF,
                isShadow: false,
                key: child.key ?? i,
                type:
                  (child.props as ButtonPropsModel).type ??
                  (type === BUTTON_TYPE.TRANSPARENT ? BUTTON_TYPE.INVISIBLE : type),
              }
            : {
                alignSelf: FLEX_ALIGN.STRETCH,
                isVertical: true,
                key: child.key ?? i,
                mVertical: THEME_SIZE.SMALL,
                p: THEME_SIZE.SMALL,
              },
        ),
      )}
    </Button>
  );
};
