import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import { type AppHeaderPropsModel } from '@lib/frontend/app/containers/AppHeader/AppHeader.models';
import { AuthMenu } from '@lib/frontend/auth/containers/AuthMenu/AuthMenu';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const AppHeader: LFCModel<AppHeaderPropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  return (
    <Wrapper
      {...wrapperProps}
      border={DIRECTION.BOTTOM}
      height={theme.layout.header.height}
      isFullWidth
      isRowAlign
      pHorizontal
      position={SHAPE_POSITION.RELATIVE}>
      <Wrapper
        grow
        isRowAlign>
        <Logo />
      </Wrapper>

      <AuthMenu />
    </Wrapper>
  );
};
