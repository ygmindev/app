import type {
  FLEX_ALIGN,
  FLEX_JUSTIFY,
} from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';

export type FlexAlignModel = `${FLEX_ALIGN}`;

export type FlexJustifyModel = `${FLEX_JUSTIFY}`;

export interface FlexStylerParamsModel {
  align?: FlexAlignModel;
  basis?: number | 'auto';
  grow?: boolean | number;
  isReverse?: boolean;
  isRow?: boolean;
  isWrap?: boolean;
  justify?: FlexAlignModel;
  self?: FlexAlignModel;
  shrink?: boolean | number;
}
