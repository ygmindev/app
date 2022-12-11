import { commonConfig } from '@lib/config/style/theme/configs/common';
import { _SvgShape } from '@lib/frontend/core/components/SvgShape/_SvgShape';
import {
  SVG_SHAPE,
  SVG_SHAPE_RECT_HEIGHT,
} from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import type { SvgShapePropsModel } from '@lib/frontend/core/components/SvgShape/SvgShape.models';
import type { FCModel } from '@lib/frontend/core/core.models';

export const SvgShape: FCModel<SvgShapePropsModel> = ({ x = 0, y = 0, ...props }) => (
  <_SvgShape
    {...props}
    borderRadius={
      (props.shape === SVG_SHAPE.RECT
        ? (commonConfig.shape?.borderRadius as number) / 2
        : undefined) as never
    }
    height={
      (props.shape === SVG_SHAPE.RECT ? props.height || SVG_SHAPE_RECT_HEIGHT : undefined) as never
    }
    x={x}
    y={y}
  />
);
