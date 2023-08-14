import { _Skeleton } from '#lib-frontend/animation/components/Skeleton/_Skeleton';
import { type SkeletonPropsModel } from '#lib-frontend/animation/components/Skeleton/Skeleton.models';
import { View } from '#lib-frontend/core/components/View/View';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';

export const Skeleton: SFCModel<SkeletonPropsModel> = ({ children, ...props }) => {
  const theme = useTheme();
  const { styles } = useStyles({ props });
  const element = (
    <_Skeleton
      {...props}
      backgroundColor={theme.color.palette.surface.muted}
      foregroundColor={theme.color.palette.surface.active}
      radius={theme.shape.borderRadius[THEME_SIZE.MEDIUM]}>
      {children}
    </_Skeleton>
  );

  return styles.marginTop || styles.marginLeft ? (
    <>
      <View
        style={{
          backgroundColor: theme.color.palette.surface.muted,
          height: styles.marginTop,
          width: styles.marginLeft,
        }}
      />

      {element}
    </>
  ) : (
    element
  );
};
