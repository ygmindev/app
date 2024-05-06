import {
  type StyleModel,
  type StylePropsModel,
  type ViewStyleModel,
} from '@lib/frontend/style/style.models';
import { type StylerModel } from '@lib/frontend/style/utils/styler/styler.models';
import { type NilModel } from '@lib/shared/core/core.models';

export type UseStylesParamsModel<TType, TStyle extends StyleModel = ViewStyleModel> = {
  props: TType & StylePropsModel<TStyle>;
  stylers?: Array<StylerModel<TType, TStyle> | TStyle | NilModel>;
};

export type UseStylesModel<TStyle extends StyleModel = ViewStyleModel> = {
  computedStyles: TStyle;
  inheritedStyles: TStyle;
  styles: TStyle;
};
