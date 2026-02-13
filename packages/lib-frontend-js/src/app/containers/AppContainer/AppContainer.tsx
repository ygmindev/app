import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { type AppContainerPropsModel } from '@lib/frontend/app/containers/AppContainer/AppContainer.models';
import { KeyboardContainer } from '@lib/frontend/core/components/KeyboardContainer/KeyboardContainer';
import { PortalHost } from '@lib/frontend/core/components/PortalHost/PortalHost';
import { Title } from '@lib/frontend/core/components/Title/Title';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { NavigationLayout } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { Notifications } from '@lib/frontend/notification/containers/Notifications/Notifications';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE_MORE,
} from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const AppContainer: LFCModel<AppContainerPropsModel> = ({
  children,
  footerElement,
  headerElement,
  routes,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [notifications] = useStore('notification.notifications');
  const [isOffline] = useStore('app.isOffline');
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <KeyboardContainer>
      <Wrapper
        {...wrapperProps}
        backgroundColor={THEME_COLOR_MORE.SURFACE}
        flex>
        <PortalHost>
          <Wrapper
            flex
            isRow
            position={SHAPE_POSITION.RELATIVE}>
            <Wrapper flex>
              <Appearable
                backgroundColor={THEME_COLOR.WARNING}
                backgroundRole={THEME_ROLE.MUTED}
                isActive={isOffline}
                isScalable={false}
                left={0}
                position={SHAPE_POSITION.ABSOLUTE}
                right={0}
                top={theme.layout.header.height}>
                <Title
                  description={t('core:errorOffline')}
                  icon="offline"
                  isCenter
                  p={THEME_SIZE_MORE.XSMALL}
                />
              </Appearable>

              <NavigationLayout
                footerElement={footerElement}
                headerElement={headerElement}
                routes={routes}>
                {children}
              </NavigationLayout>

              {(notifications?.length ?? 0) > 0 && <Notifications />}
            </Wrapper>
          </Wrapper>
        </PortalHost>
      </Wrapper>
    </KeyboardContainer>
  );
};
