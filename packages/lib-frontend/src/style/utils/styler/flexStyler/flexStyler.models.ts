import type {
  FLEX_ALIGN,
  FLEX_JUSTIFY,
} from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';

type FlexAlignModel = `${FLEX_ALIGN}`;

type FlexJustifyModel = `${FLEX_JUSTIFY}`;

export interface FlexStylerParamsModel {
  align?: FlexAlignModel;
  basis?: number | 'auto';
  grow?: boolean | number;
  isReverse?: boolean;
  isRow?: boolean;
  isWrap?: boolean;
  justify?: FlexJustifyModel;
  self?: FlexAlignModel;
  shrink?: boolean | number;
}
