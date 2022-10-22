import type { _SkeletonPropsModel } from '@lib/frontend/core/components/Skeleton/_Skeleton.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { IContentLoaderProps } from 'react-content-loader/native';
import ContentLoader from 'react-content-loader/native';

export const _Skeleton = composeComponent<_SkeletonPropsModel, IContentLoaderProps>({
  Component: ContentLoader,
  getProps: ({ backgroundColor, children, foregroundColor, height, width }) => ({
    backgroundColor,
    children,
    foregroundColor,
    height,
    width,
  }),
});
