import type { FlexStylerParamsModel } from '@lib/frontend/styling/utils/styler/flexStyler/flexStyler.models';
import type { StylerModel } from '@lib/frontend/styling/utils/styler/styler.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';

export const flexStyler: StylerModel<FlexStylerParamsModel> = ({
  align,
  basis,
  grow,
  isReverse,
  isRow,
  isWrap,
  justify,
  self,
  shrink,
}) =>
  cleanObject({
    alignItems: align,
    alignSelf: self,
    display: 'flex',
    flexBasis: basis,
    flexDirection: isRow
      ? isReverse
        ? 'row-reverse'
        : 'row'
      : isReverse
      ? 'column-reverse'
      : 'column',
    flexGrow: grow === true ? 1 : grow === false ? undefined : grow,
    flexShrink: shrink === true ? 1 : shrink === false ? undefined : shrink,
    flexWrap: isWrap ? 'wrap' : undefined,
    justifyContent: justify,
  });
