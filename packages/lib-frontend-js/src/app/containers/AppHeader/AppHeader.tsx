import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import { type AppHeaderPropsModel } from '@lib/frontend/app/containers/AppHeader/AppHeader.models';
import { AppMenu } from '@lib/frontend/app/containers/AppMenu/AppMenu';
import { ORDER } from '@lib/frontend/commerce/commerce.constants';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Title } from '@lib/frontend/core/components/Title/Title';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { COMMERCE } from '@lib/shared/commerce/commerce.constants';

export const AppHeader: LFCModel<AppHeaderPropsModel> = ({ ...props }) => {
  const { t } = useTranslation([COMMERCE]);
  const { push } = useRouter();
  const { wrapperProps } = useLayoutStyles({ props });
  const [isOffline] = useStore('app.isOffline');
  const [items] = useStore('commerce.items');
  const theme = useTheme();
  return (
    <Wrapper
      {...wrapperProps}
      border={DIRECTION.BOTTOM}
      isFullWidth
      pHorizontal
      position={SHAPE_POSITION.RELATIVE}
      zIndex>
      <Wrapper
        height={theme.layout.header.height}
        isAlign
        isRow>
        <Wrapper
          flex
          isAlign
          isRow>
          <Logo />
        </Wrapper>

        <Button
          icon="cart"
          // TODO: plural based on count
          // iconText={`${items?.length ?? t('core:empty')}`}
          onPress={() => push({ pathname: ORDER })}
          type={BUTTON_TYPE.INVISIBLE}
        />

        <AppMenu />
      </Wrapper>

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
    </Wrapper>
  );
};
