import isNumber from 'lodash/isNumber';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useIsMobile } from '#lib-frontend/core/hooks/useIsMobile/useIsMobile';
import { type MainLayoutPropsModel } from '#lib-frontend/core/layouts/MainLayout/MainLayout.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FLEX_JUSTIFY } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';

export const MainLayout: LFCModel<MainLayoutPropsModel> = ({
  bottomElement,
  children,
  size = THEME_SIZE.MEDIUM,
  topElement,
  ...props
}) => {
  const { computedStyles, inheritedStyles, wrapperProps } = useLayoutStyles({ props });
  const isMobile = useIsMobile();
  const isFullWidthF = props.isFullWidth || isMobile;
  const theme = useTheme();
  const widthF = isFullWidthF ? undefined : isNumber(size) ? size : theme.layout.width[size];
  return (
    <Wrapper
      flex
      style={inheritedStyles}>
      <Wrapper
        flex
        isFullWidth={isFullWidthF}
        isVerticalScrollable
        isVerticalScrollableVisible
        justify={FLEX_JUSTIFY.START}>
        {topElement}

        <Wrapper
          {...wrapperProps}
          m="auto"
          style={computedStyles}
          width={widthF}>
          {children}
        </Wrapper>
      </Wrapper>

      <Wrapper
        m="auto"
        pTop
        width={widthF}>
        {bottomElement}
      </Wrapper>
    </Wrapper>
  );
};
