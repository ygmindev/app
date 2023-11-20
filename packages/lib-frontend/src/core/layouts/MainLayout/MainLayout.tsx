import isNumber from 'lodash/isNumber';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useIsMobile } from '#lib-frontend/core/hooks/useIsMobile/useIsMobile';
import { type MainLayoutPropsModel } from '#lib-frontend/core/layouts/MainLayout/MainLayout.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';

export const MainLayout: LFCModel<MainLayoutPropsModel> = ({
  bottomElement,
  children,
  isFullHeight,
  size = THEME_SIZE.MEDIUM,
  topElement,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const isMobile = useIsMobile();
  const isFullWidthF = props.isFullWidth || isMobile;
  const theme = useTheme();
  const widthF = isFullWidthF ? undefined : isNumber(size) ? size : theme.layout.width[size];
  return (
    <Wrapper
      {...wrapperProps}
      flex>
      <Wrapper
        isFullWidth={isFullWidthF}
        isVerticalScrollable
        s>
        {topElement}

        <Wrapper
          flex={isFullHeight}
          m="auto"
          s
          width={widthF}>
          {children}
        </Wrapper>

        <Wrapper
          m="auto"
          pTop
          width={widthF}>
          {bottomElement}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
