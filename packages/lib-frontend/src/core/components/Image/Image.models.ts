import type { _ImagePropsModel } from '@lib/frontend/core/components/Image/_Image.models';
import type { ShapeStylerParamsModel } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.models';

export interface ImagePropsModel
  extends Omit<_ImagePropsModel, 'src'>,
    Pick<ShapeStylerParamsModel, 'width' | 'height' | 'isAbsoluteFill'> {
  isAutoSize?: boolean;
  src: string | Array<string>;
}
