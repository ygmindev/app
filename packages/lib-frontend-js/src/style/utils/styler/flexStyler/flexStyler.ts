import { type FlexStylerParamsModel } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.models';
import { type StylerModel } from '@lib/frontend/style/utils/styler/styler.models';

export const flexStyler: StylerModel<FlexStylerParamsModel> = ({
  align,
  alignSelf,
  basis,
  flex,
  grow,
  isReverse,
  isRow,
  isWrap,
  justify,
  justifySelf,
  shrink,
}) => ({
  alignItems: align,
  alignSelf,
  display: 'flex',
  flex: flex === true ? 1 : flex === false ? undefined : flex,
  flexBasis: basis,
  flexDirection: isRow
    ? isReverse
      ? 'row-reverse'
      : 'row'
    : isReverse
      ? 'column-reverse'
      : undefined,
  flexGrow: grow === true ? 1 : grow === false ? undefined : grow,
  flexShrink: shrink === true ? 1 : shrink === false ? undefined : shrink,
  flexWrap: isWrap ? 'wrap' : undefined,
  justifyContent: justify,
  justifySelf,
});
