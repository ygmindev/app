import type { ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { IconText } from '@lib/frontend/core/components/IconText/IconText';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Press } from '@lib/frontend/core/components/Press/Press';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import {
  THEME_BASIC_SIZE,
  THEME_COLOR,
  THEME_RELATIVE_COLOR,
} from '@lib/frontend/styling/utils/theme/theme.constants';
import { promisify } from '@lib/shared/core/utils/promisify/promisify';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { useCallback, useState } from 'react';

export const Button: SFCModel<ButtonPropsModel> = ({
  children,
  color = THEME_COLOR.PRIMARY,
  icon,
  isDisabled,
  isFullWidth,
  isLoading,
  isTransparent,
  onPress,
  size = THEME_BASIC_SIZE.MEDIUM,
  ...props
}) => {
  const [isLoadingState, setLoadingState] = useState<boolean>(false);
  const _isLoading = isLoading || isLoadingState;
  const _isBlocked = isDisabled || _isLoading;
  const theme = useTheme();
  const isMounted = useMount();
  const { styles } = useStyles({ props, stylers: [{ height: theme.shape.height[size] }] });
  const { dark, light, main } = theme.colors[color];

  const _handlePress = useCallback(async () => {
    await sleep();
    isMounted && setLoadingState(true);
    onPress && (await promisify(onPress)());
    isMounted && setLoadingState(false);
  }, [isMounted, onPress, setLoadingState]);

  return (
    <Press
      {...props}
      from={{
        backgroundColor: isTransparent ? theme.colors.background.main : _isBlocked ? light : main,
      }}
      isCenter
      isDisabled={_isBlocked}
      isFullWidth={isFullWidth}
      onPress={_handlePress}
      style={styles}
      to={{ backgroundColor: isTransparent || _isBlocked ? light : dark }}>
      {_isLoading && (
        <Wrapper
          isAbsoluteFill
          isCenter>
          <Loading
            color={color}
            size={THEME_BASIC_SIZE.LARGE}
          />
        </Wrapper>
      )}

      <Wrapper
        mLeft={0}
        opacity={_isLoading ? 0 : undefined}>
        <IconText
          color={isTransparent ? color : THEME_RELATIVE_COLOR.CONTRAST}
          icon={icon}
          size={size}>
          {children}
        </IconText>
      </Wrapper>
    </Press>
  );
};
