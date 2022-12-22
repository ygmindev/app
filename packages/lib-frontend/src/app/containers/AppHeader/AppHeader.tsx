import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import { APP_HEADER_HEIGHT } from '@lib/frontend/app/containers/AppHeader/AppHeader.constants';
import type { AppHeaderPropsModel } from '@lib/frontend/app/containers/AppHeader/AppHeader.models';
import { AuthMenu } from '@lib/frontend/auth/containers/AuthMenu/AuthMenu';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { RouteHeader } from '@lib/frontend/route/containers/RouteHeader/RouteHeader';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const AppHeader: SFCModel<AppHeaderPropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });

  return (
    <Wrapper
      height={APP_HEADER_HEIGHT}
      isRowAlign
      mHorizontal
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}
    >
      <Wrapper grow isRowAlign>
        <Logo />
      </Wrapper>

      <AuthMenu />

      <RouteHeader />
    </Wrapper>
  );
};
