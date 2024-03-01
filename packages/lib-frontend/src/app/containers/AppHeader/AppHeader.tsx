import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import { type AppHeaderPropsModel } from '@lib/frontend/app/containers/AppHeader/AppHeader.models';
import { AuthMenu } from '@lib/frontend/auth/containers/AuthMenu/AuthMenu';
import { Title } from '@lib/frontend/core/components/Title/Title';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE, THEME_ROLE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const AppHeader: LFCModel<AppHeaderPropsModel> = ({ ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const [isOffline] = useStore('app.isOffline');
  const theme = useTheme();
  return (
    <Wrapper
      {...wrapperProps}
      isFullWidth
      position={SHAPE_POSITION.RELATIVE}>
      <Wrapper
        border={DIRECTION.BOTTOM}
        height={theme.layout.header.height}
        isAlign
        isRow
        pHorizontal>
        <Wrapper
          flex
          isAlign
          isRow>
          <Logo />
        </Wrapper>

        <AuthMenu />
      </Wrapper>

      <Appearable
        bottom={0}
        isActive={isOffline}
        isScalable={false}
        position={SHAPE_POSITION.ABSOLUTE}>
        <Title
          backgroundColor={THEME_COLOR_MORE.SURFACE}
          backgroundRole={THEME_ROLE.MUTED}
          description={t('core:errorOffline')}
          icon="offline"
          isCenter
          p={THEME_SIZE_MORE.XSMALL}
        />
      </Appearable>
    </Wrapper>
  );
};
