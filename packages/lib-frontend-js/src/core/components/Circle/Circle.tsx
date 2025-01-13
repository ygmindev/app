import { type CirclePropsModel } from '@lib/frontend/core/components/Circle/Circle.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import isNumber from 'lodash/isNumber';

export const Circle: LFCModel<CirclePropsModel> = ({
  backgroundColor = THEME_COLOR.PRIMARY,
  size = THEME_SIZE.MEDIUM,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const sizeF = isNumber(size) ? size : theme.shape.size[size] / 2;
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      height={sizeF}
      isCenter
      round={sizeF / 2}
      width={sizeF}
      {...wrapperProps}
    />
  );
};
