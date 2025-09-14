import {
  type FLEX_ALIGN,
  type FLEX_JUSTIFY,
} from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';

export type FlexStylerParamsModel = {
  align?: FLEX_ALIGN;
  alignSelf?: FLEX_ALIGN;
  basis?: number | 'auto';
  flex?: boolean | number;
  grow?: boolean | number;
  isReverse?: boolean;
  isRow?: boolean;
  isWrap?: boolean;
  justify?: FLEX_JUSTIFY;
  justifySelf?: FLEX_JUSTIFY;
  shrink?: boolean | number;
};
