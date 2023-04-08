import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import type { MainLayoutPropsModel } from '@lib/frontend/core/layouts/MainLayout/MainLayout.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';

export const MainLayout: SFCModel<MainLayoutPropsModel> = ({
  children,
  isCenter,
  isFullWidth,
  isHorizontalCenter,
  isVerticalCenter,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const isMobile = useIsMobile();
  const _isFullWidth = isFullWidth || isMobile;
  const theme = useTheme();
  return (
    <Wrapper
      grow
      isFullWidth={_isFullWidth}
      style={styles}>
      <Wrapper
        m={isCenter ? 'auto' : undefined}
        mHorizontal={isCenter || isHorizontalCenter ? 'auto' : undefined}
        mVertical={isCenter || isVerticalCenter ? 'auto' : undefined}
        spacing
        width={_isFullWidth ? undefined : theme.layout.width[THEME_SIZE.MEDIUM]}>
        {children}
      </Wrapper>
    </Wrapper>
  );
};
