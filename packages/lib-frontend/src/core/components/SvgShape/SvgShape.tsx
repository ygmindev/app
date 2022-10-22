import { commonThemeConfig } from '@lib/config/theme/common.config';
import { _SvgShape } from '@lib/frontend/core/components/SvgShape/_SvgShape';
import {
  SVG_SHAPE,
  SVG_SHAPE_HEIGHT_DEFAULT,
} from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import type { SvgShapePropsModel } from '@lib/frontend/core/components/SvgShape/SvgShape.models';
import type { FCModel } from '@lib/frontend/core/core.models';

export const SvgShape: FCModel<SvgShapePropsModel> = ({ x = 0, y = 0, ...props }) => (
  <_SvgShape
    {...props}
    borderRadius={
      (props.shape === SVG_SHAPE.RECT
        ? (commonThemeConfig.shape?.borderRadius as number) / 2
        : undefined) as never
    }
    height={
      (props.shape === SVG_SHAPE.RECT
        ? props.height || SVG_SHAPE_HEIGHT_DEFAULT
        : undefined) as never
    }
    x={x}
    y={y}
  />
);
