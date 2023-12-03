import { _Skeleton } from '#lib-frontend/animation/components/Skeleton/_Skeleton';
import { type SkeletonPropsModel } from '#lib-frontend/animation/components/Skeleton/Skeleton.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE, THEME_ROLE } from '#lib-frontend/style/style.constants';

export const Skeleton: LFCModel<SkeletonPropsModel> = ({ children, elementState, ...props }) => {
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  return elementState === ELEMENT_STATE.LOADING ? (
    <Wrapper
      {...wrapperProps}
      isOverflowHidden
      round>
      <_Skeleton
        backgroundColor={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MUTED]}
        foregroundColor={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.ACTIVE]}>
        {children}
      </_Skeleton>
    </Wrapper>
  ) : (
    children
  );
};
