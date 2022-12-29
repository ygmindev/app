import { _SvgShape } from '@lib/frontend/core/components/SvgShape/_SvgShape';
import type { _SvgShapePropsModel } from '@lib/frontend/core/components/SvgShape/_SvgShape.models';
import { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import type { SvgShapePropsModel } from '@lib/frontend/core/components/SvgShape/SvgShape.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const SvgShape = composeComponent<SvgShapePropsModel, _SvgShapePropsModel>({
  getComponent: () => _SvgShape,

  getProps: ({ x = 0, y = 0, ...props }, theme) => ({
    ...props,
    borderRadius: (props.shape === SVG_SHAPE.RECT
      ? theme.shape.borderRadius / 2
      : undefined) as never,
    x,
    y,
  }),
});
