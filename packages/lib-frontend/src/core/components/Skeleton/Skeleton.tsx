import { _Skeleton } from '@lib/frontend/core/components/Skeleton/_Skeleton';
import type { SkeletonPropsModel } from '@lib/frontend/core/components/Skeleton/Skeleton.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';

export const Skeleton: SFCModel<SkeletonPropsModel> = ({ ...props }) => {
  const theme = useTheme();
  return (
    <_Skeleton
      backgroundColor={theme.colors.secondary.main}
      foregroundColor={theme.colors.secondary.light}
      {...props}
    />
  );
};
