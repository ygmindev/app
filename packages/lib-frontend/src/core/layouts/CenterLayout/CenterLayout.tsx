import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '#lib-frontend/core/core.models';
import type { CenterLayoutPropsModel } from '#lib-frontend/core/layouts/CenterLayout/CenterLayout.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const CenterLayout: SFCModel<CenterLayoutPropsModel> = ({ children, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      grow
      isCenter
      isFullWidth
      p
      spacing
      style={styles}>
      {children}
    </Wrapper>
  );
};
