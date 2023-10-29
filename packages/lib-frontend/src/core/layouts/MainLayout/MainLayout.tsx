import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useIsMobile } from '#lib-frontend/core/hooks/useIsMobile/useIsMobile';
import { type MainLayoutPropsModel } from '#lib-frontend/core/layouts/MainLayout/MainLayout.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FLEX_JUSTIFY } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';

export const MainLayout: LFCModel<MainLayoutPropsModel> = ({
  children,
  size = THEME_SIZE.MEDIUM,
  ...props
}) => {
  const { computedStyles, inheritedStyles, wrapperProps } = useLayoutStyles({ props });
  const isMobile = useIsMobile();
  const isFullWidthF = props.isFullWidth || isMobile;
  const theme = useTheme();
  return (
    <Wrapper
      align={FLEX_JUSTIFY.CENTER}
      flex
      isFullWidth={isFullWidthF}
      isVerticalScrollable
      justify={FLEX_JUSTIFY.START}
      style={inheritedStyles}>
      <Wrapper
        {...wrapperProps}
        flex
        style={computedStyles}
        width={isFullWidthF ? undefined : theme.layout.width[size]}>
        {children}
      </Wrapper>
    </Wrapper>
  );
};
