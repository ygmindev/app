import type { StyleModel, StylePropsModel } from '@lib/frontend/style/style.models';
import type { StylerModel } from '@lib/frontend/style/utils/styler/styler.models';

export interface UseStylesParamsModel<TProps> {
  props: StylePropsModel & TProps;
  stylers?: Array<StylerModel<TProps> | StyleModel>;
}

export interface UseStylesModel<TProps> {
  computedStyles: StyleModel;
  inheritedStyles: StyleModel;
  propsWithOutStyle?: Omit<TProps, 'style'>;
  styles: StyleModel;
}
