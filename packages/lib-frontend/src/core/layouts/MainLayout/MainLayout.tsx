import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { MAIN_LAYOUT_WIDTH } from '@lib/frontend/core/layouts/MainLayout/MainLayout.constants';
import type { MainLayoutPropsModel } from '@lib/frontend/core/layouts/MainLayout/MainLayout.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const MainLayout: SFCModel<MainLayoutPropsModel> = ({ children, ...props }) => {
  const { styles } = useStyles({ props });
  const isMobile = useIsMobile();
  return (
    <Wrapper
      grow
      isFullWidth={isMobile}
      m="auto"
      spacing
      style={styles}
      width={isMobile ? undefined : MAIN_LAYOUT_WIDTH}>
      {children}
    </Wrapper>
  );
};
