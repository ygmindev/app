import { Svg } from '@lib/frontend/core/components/Svg/Svg';
import type { SvgPropsModel } from '@lib/frontend/core/components/Svg/Svg.models';
import { SvgShape } from '@lib/frontend/core/components/SvgShape/SvgShape';
import { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SvgPropsModel> = {
  Component: Svg,
  defaultProps: {},
  variants: [
    {
      props: {
        children: (
          <SvgShape
            shape={SVG_SHAPE.RECT}
            shapeProps={{ height: 100, width: 100 }}
          />
        ),
      },
    },
  ],
};
