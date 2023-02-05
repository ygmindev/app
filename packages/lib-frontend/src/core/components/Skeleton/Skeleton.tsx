import { _Skeleton } from '@lib/frontend/core/components/Skeleton/_Skeleton';
import type { _SkeletonPropsModel } from '@lib/frontend/core/components/Skeleton/_Skeleton.models';
import type { SkeletonPropsModel } from '@lib/frontend/core/components/Skeleton/Skeleton.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

// TODO: fix error logs
export const Skeleton = composeComponent<SkeletonPropsModel, _SkeletonPropsModel>({
  Component: _Skeleton,

  getProps: ({ height, width, ...props }, theme) => ({
    backgroundColor: theme.colors.tone.neutral.muted,
    height: height || 0,
    width: width || 0,
    ...props,
  }),
});

process.env.APP_DEBUG && (Skeleton.displayName = variableName(() => Skeleton));
