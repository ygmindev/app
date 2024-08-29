import { _SkeletonGroup } from '@lib/frontend/animation/components/SkeletonGroup/_SkeletonGroup';
import { type SkeletonGroupPropsModel } from '@lib/frontend/animation/components/SkeletonGroup/SkeletonGroup.models';
import { View } from '@lib/frontend/core/components/View/View';
import { type SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE, THEME_ROLE } from '@lib/frontend/style/style.constants';

export const SkeletonGroup: SFCModel<SkeletonGroupPropsModel> = ({ children, ...props }) => {
  const theme = useTheme();
  const { styles } = useStyles({ props });
  const element = <_SkeletonGroup {...props}>{children}</_SkeletonGroup>;
  return styles.marginTop || styles.marginLeft ? (
    <>
      <View
        style={{
          backgroundColor: theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN],
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
