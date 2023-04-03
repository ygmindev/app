import { _SkeletonGroup } from '@lib/frontend/animation/components/SkeletonGroup/_SkeletonGroup';
import type { SkeletonGroupPropsModel } from '@lib/frontend/animation/components/SkeletonGroup/SkeletonGroup.models';
import { View } from '@lib/frontend/core/components/View/View';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';

export const SkeletonGroup: SFCModel<SkeletonGroupPropsModel> = ({ children, ...props }) => {
  const theme = useTheme();
  const { styles } = useStyles({ props });
  const _element = <_SkeletonGroup {...props}>{children}</_SkeletonGroup>;
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