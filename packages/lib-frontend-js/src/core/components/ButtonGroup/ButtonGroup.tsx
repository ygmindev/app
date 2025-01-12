import { Button } from '@lib/frontend/core/components/Button/Button';
import { type ButtonGroupPropsModel } from '@lib/frontend/core/components/ButtonGroup/ButtonGroup.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { type ThemeSizeModel } from '@lib/frontend/style/style.models';
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
      theme.shape.spacing[THEME_SIZE.MEDIUM],
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
      {children.map((child) => cloneElement(child, { ...props, height: heightF }))}
    </Button>
  );
};
