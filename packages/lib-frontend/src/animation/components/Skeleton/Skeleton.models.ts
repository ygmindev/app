import { type _SkeletonPropsModel } from '@lib/frontend/animation/components/Skeleton/_Skeleton.models';

export type SkeletonPropsModel = Omit<
  _SkeletonPropsModel,
  'backgroundColor' | 'borderRadius' | 'foregroundColor' | 'radius'
>;
