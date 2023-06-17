import type { _ImagePropsModel } from '#lib-frontend/core/components/Image/_Image.models';
import type { DimensionModel } from '#lib-frontend/core/core.models';

export type ImagePropsModel = {
  isAutoSize?: boolean;
  src: string | Array<string>;
} & Omit<_ImagePropsModel, 'src'> &
  DimensionModel;
