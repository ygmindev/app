import type { _ImagePropsModel } from '@lib/frontend/core/components/Image/_Image.models';
import type { DimensionModel } from '@lib/frontend/platform/platform.models';

export interface ImagePropsModel extends Omit<_ImagePropsModel, 'src'>, DimensionModel {
  isAutoSize?: boolean;
  src: string | Array<string>;
}
