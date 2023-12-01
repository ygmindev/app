import isNumber from 'lodash/isNumber';

import { Divider } from '#lib-frontend/core/components/Divider/Divider';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useIsMobile } from '#lib-frontend/core/hooks/useIsMobile/useIsMobile';
import { type MainLayoutPropsModel } from '#lib-frontend/core/layouts/MainLayout/MainLayout.models';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
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
  const { width } = useStore((state) => state.app.dimension);
  const isMobile = useIsMobile();
  const isFullWidthF = props.isFullWidth || isMobile;
  const theme = useTheme();
  const widthF = isFullWidthF ? width : isNumber(size) ? size : theme.layout.width[size];
  return (
    <Wrapper
      {...wrapperProps}
      flex
      s>
      {topElement && (
        <>
          <Wrapper
            key="element-top"
            p>
            {topElement}
          </Wrapper>

          {isFullHeight && <Divider key="divider-top" />}
        </>
      )}

      <Wrapper
        flex={isFullHeight}
        isFullWidth={isFullWidthF}
        isVerticalScrollable={isFullHeight}>
        <Wrapper
          flex={isFullHeight}
          isCenter
          m="auto"
          p
          s
          width={widthF}>
          {children}
        </Wrapper>
      </Wrapper>

      {bottomElement && (
        <>
          {isFullHeight && <Divider key="divider-bottom" />}

          <Wrapper
            key="element-bottom"
            mHorizontal="auto"
            width={widthF}>
            {bottomElement}
          </Wrapper>
        </>
      )}
    </Wrapper>
  );
};
