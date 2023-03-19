import { _Skeleton } from '@lib/frontend/animation/components/Skeleton/_Skeleton';
import type { SkeletonPropsModel } from '@lib/frontend/animation/components/Skeleton/Skeleton.models';
import { View } from '@lib/frontend/core/components/View/View';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { palette } from '@lib/frontend/style/utils/palette/palette';

export const Skeleton: SFCModel<SkeletonPropsModel> = ({ children, ...props }) => {
  const theme = useTheme();
  const { styles } = useStyles({ props });
  const _element = (
    <_Skeleton
      {...props}
      backgroundColor={theme.colors.tone.neutral.muted}
      foregroundColor={palette({
        color: theme.colors.tone.neutral.muted,
        lightness: theme.colors.activeLightness,
      })}
      radius={theme.shape.borderRadius}>
      {children}
    </_Skeleton>
  );

  return styles.marginTop || styles.marginLeft ? (
    <>
      <View
        style={{
          backgroundColor: theme.colors.tone.neutral.main,
          height: styles.marginTop,
          width: styles.marginLeft,
        }}
      />

      {_element}
    </>
  ) : (
    _element
  );
};
