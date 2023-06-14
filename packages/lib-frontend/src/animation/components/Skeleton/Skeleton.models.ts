import type { _SkeletonPropsModel } from '#lib-frontend/animation/components/Skeleton/_Skeleton.models';

export interface SkeletonPropsModel
  extends Omit<_SkeletonPropsModel, 'backgroundColor' | 'foregroundColor' | 'radius'> {}
