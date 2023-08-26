import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useIsMobile } from '#lib-frontend/core/hooks/useIsMobile/useIsMobile';
import { type MainLayoutPropsModel } from '#lib-frontend/core/layouts/MainLayout/MainLayout.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';

export const MainLayout: SFCModel<MainLayoutPropsModel> = ({ children, ...props }) => {
  const { styles, wrapperProps } = useLayoutStyles({ props });
  const isMobile = useIsMobile();
  const isFullWidthF = props.isFullWidth || isMobile;
  const theme = useTheme();
  return (
    <Wrapper
      grow
      {...wrapperProps}
      isFullWidth={isFullWidthF}
      shrink
      style={styles}
      width={isFullWidthF ? undefined : theme.layout.width[THEME_SIZE.MEDIUM]}>
      {children}
    </Wrapper>
  );
};
