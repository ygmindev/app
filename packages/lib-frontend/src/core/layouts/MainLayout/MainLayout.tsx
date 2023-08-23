import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useIsMobile } from '#lib-frontend/core/hooks/useIsMobile/useIsMobile';
import { type MainLayoutPropsModel } from '#lib-frontend/core/layouts/MainLayout/MainLayout.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import {
  FLEX_ALIGN,
  FLEX_JUSTIFY,
} from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';

export const MainLayout: SFCModel<MainLayoutPropsModel> = ({
  children,
  isCenter,
  isFullWidth,
  isHorizontalScrollable,
  isRow,
  isRowAlign,
  isVerticalScrollable,
  p,
  s = true,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const isMobile = useIsMobile();
  const isFullWidthF = isFullWidth || isMobile;
  const theme = useTheme();
  return (
    <Wrapper
      isFullWidth={isFullWidthF}
      shrink
      style={styles}>
      <Wrapper
        align={isCenter ? FLEX_ALIGN.CENTER : undefined}
        isFullWidth={isFullWidthF}
        isHorizontalScrollable={isHorizontalScrollable}
        isRow={isRow}
        isRowAlign={isRowAlign}
        isVerticalScrollable={isVerticalScrollable}
        justify={isCenter ? FLEX_JUSTIFY.CENTER : undefined}
        m="auto"
        p={p}
        s={s}
        shrink
        width={isFullWidthF ? undefined : theme.layout.width[THEME_SIZE.MEDIUM]}>
        {children}
      </Wrapper>
    </Wrapper>
  );
};
