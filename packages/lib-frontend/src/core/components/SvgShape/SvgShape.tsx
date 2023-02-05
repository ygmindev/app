import { _SvgShape } from '@lib/frontend/core/components/SvgShape/_SvgShape';
import type { _SvgShapePropsModel } from '@lib/frontend/core/components/SvgShape/_SvgShape.models';
import { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import type { SvgShapePropsModel } from '@lib/frontend/core/components/SvgShape/SvgShape.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const SvgShape = composeComponent<SvgShapePropsModel, _SvgShapePropsModel>({
  Component: _SvgShape,

  getProps: ({ x = 0, y = 0, ...props }, theme) => ({
    ...props,
    borderRadius: (props.shape === SVG_SHAPE.RECT
      ? theme.shape.borderRadius / 2
      : undefined) as never,
    x,
    y,
  }),
});

process.env.APP_DEBUG && (SvgShape.displayName = variableName(() => SvgShape));
