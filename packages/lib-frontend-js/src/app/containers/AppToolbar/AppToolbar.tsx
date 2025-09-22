import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import { AppMenuButton } from '@lib/frontend/app/containers/AppMenuButton/AppMenuButton';
import { type AppToolbarPropsModel } from '@lib/frontend/app/containers/AppToolbar/AppToolbar.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const AppToolbar: LFCModel<AppToolbarPropsModel> = ({ ...props }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const [isMinimized, isMinimizedSet] = useStore('app.layout.isMinimized');
  console.warn(isMinimizedSet);
  return (
    <Wrapper
      {...wrapperProps}
      border={DIRECTION.RIGHT}
      p
      position={SHAPE_POSITION.RELATIVE}
      s
      width={theme.layout.header.width}
      zIndex>
      <Wrapper flex>
        <Wrapper
          isAlign
          isRow
          justify={FLEX_JUSTIFY.SPACE_BETWEEN}>
          <Logo />

          <Wrapper>
            <Button
              icon="sidebarMinimize"
              onPress={() => isMinimizedSet(true)}
              tooltip={t('app:closeSidebar')}
              type={BUTTON_TYPE.INVISIBLE}
            />
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <AppMenuButton />
    </Wrapper>
  );
};
