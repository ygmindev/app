import { _Skeleton } from '@lib/frontend/core/components/Skeleton/_Skeleton';
import type { SkeletonPropsModel } from '@lib/frontend/core/components/Skeleton/Skeleton.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';

export const Skeleton: SFCModel<SkeletonPropsModel> = ({ height, width, ...props }) => {
  const theme = useTheme();
  return (
    <_Skeleton
      backgroundColor={theme.colors.tone.border}
      height={height || 0}
      width={width || 0}
      {...props}
    />
  );
};
