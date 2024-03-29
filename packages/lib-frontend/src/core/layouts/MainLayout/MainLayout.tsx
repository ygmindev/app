import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { type MainLayoutPropsModel } from '@lib/frontend/core/layouts/MainLayout/MainLayout.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import isNumber from 'lodash/isNumber';

export const MainLayout: LFCModel<MainLayoutPropsModel> = ({
  bottomElement,
  children,
  isFullHeight,
  isFullWidth,
  size = THEME_SIZE.MEDIUM,
  topElement,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [width] = useStore('app.dimension.width');
  const isMobile = useIsMobile();
  const isFullWidthF = isFullWidth || isMobile;
  const theme = useTheme();
  const widthF = isFullWidthF ? width : isNumber(size) ? size : theme.layout.width[size];
  return (
    <Wrapper
      flex
      isFullWidth
      s>
      {topElement && (
        <Wrapper isFullWidth>
          <Wrapper
            isFullWidth={isFullWidthF}
            mHorizontal="auto"
            p={isFullHeight}
            width={widthF}>
            {topElement}
          </Wrapper>

          {isFullHeight && <Divider />}
        </Wrapper>
      )}

      <Wrapper
        {...wrapperProps}
        isFullHeight={isFullHeight}
        isFullWidth
        isVerticalScrollable={isFullHeight}
        isVerticalScrollableVisible>
        <Wrapper
          flex={isFullHeight}
          isFullWidth={isFullWidthF}
          m="auto"
          s
          width={widthF}>
          {children}
        </Wrapper>
      </Wrapper>

      {bottomElement && (
        <Wrapper isFullWidth>
          {isFullHeight && <Divider />}

          <Wrapper
            isFullWidth={isFullWidthF}
            mHorizontal="auto"
            pTop={isFullHeight}
            width={widthF}>
            {bottomElement}
          </Wrapper>
        </Wrapper>
      )}
    </Wrapper>
  );
};
