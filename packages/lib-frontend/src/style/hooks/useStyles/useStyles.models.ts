import type { StyleModel, StylePropsModel, ViewStyleModel } from '#lib-frontend/style/style.models';
import type { StylerModel } from '#lib-frontend/style/utils/styler/styler.models';

export type UseStylesParamsModel<TProps, TStyle extends StyleModel = ViewStyleModel> = {
  props: StylePropsModel<TStyle> & TProps;
  stylers?: Array<StylerModel<TProps, TStyle> | TStyle>;
};

export type UseStylesModel<TProps, TStyle extends StyleModel = ViewStyleModel> = {
  computedStyles: TStyle;
  inheritedStyles: TStyle;
  propsWithOutStyle?: Omit<TProps, 'style'>;
  styles: TStyle;
};
