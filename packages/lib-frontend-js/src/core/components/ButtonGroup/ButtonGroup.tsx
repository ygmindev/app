import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { type ButtonGroupPropsModel } from '@lib/frontend/core/components/ButtonGroup/ButtonGroup.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { type ThemeSizeModel, type ThemeSizeMoreModel } from '@lib/frontend/style/style.models';
import { FLEX_ALIGN } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import isNumber from 'lodash/isNumber';
import { cloneElement, useMemo } from 'react';

export const ButtonGroup: LFCModel<ButtonGroupPropsModel> = ({
  children,
  height,
  size = THEME_SIZE.MEDIUM,
  ...props
}) => {
  const theme = useTheme();

  const heightF = useMemo(
    () =>
      (isNumber(height) ? height : (height ?? theme.shape.size[size as ThemeSizeModel])) -
      theme.shape.spacing[
        size === THEME_SIZE.LARGE || (size as ThemeSizeMoreModel) === THEME_SIZE_MORE.XLARGE
          ? THEME_SIZE.MEDIUM
          : (size as ThemeSizeModel)
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
      s={0}
      size={size}>
      {children.map((child) =>
        cloneElement(child, {
          ...props,
          height: heightF,
          isShadow: false,
          type: props.type === BUTTON_TYPE.TRANSPARENT ? BUTTON_TYPE.INVISIBLE : props.type,
        }),
      )}
    </Button>
  );
};
