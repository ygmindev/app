import { Svg } from '@lib/frontend/core/components/Svg/Svg';
import { SvgShape } from '@lib/frontend/core/components/SvgShape/SvgShape';
import { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import type { SvgShapePropsModel } from '@lib/frontend/core/components/SvgShape/SvgShape.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SvgShapePropsModel> = {
  Component: SvgShape,
  Renderer: ({ ...props }) => (
    <Svg>
      <SvgShape {...props} />
    </Svg>
  ),
  defaultProps: { shape: SVG_SHAPE.RECT, shapeProps: { height: 100, width: 100 } },
  variants: [],
};
