import {
  type FLEX_ALIGN,
  type FLEX_JUSTIFY,
} from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';

export type FlexAlignModel = `${FLEX_ALIGN}`;

export type FlexJustifyModel = `${FLEX_JUSTIFY}`;

export type FlexStylerParamsModel = {
  align?: FlexAlignModel;
  alignSelf?: FlexAlignModel;
  basis?: number | 'auto';
  flex?: boolean | number;
  grow?: boolean | number;
  isReverse?: boolean;
  isRow?: boolean;
  isWrap?: boolean;
  justify?: FlexJustifyModel;
  justifySelf?: FlexJustifyModel;
  shrink?: boolean | number;
};
