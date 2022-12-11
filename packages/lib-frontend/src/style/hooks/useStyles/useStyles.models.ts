import type { WithStyleParamsModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { StyleModel } from '@lib/frontend/style/style.models';
import type { StylerModel } from '@lib/frontend/style/utils/styler/styler.models';

export interface UseStylesParamsModel<TProps> {
  props: WithStyleParamsModel & TProps;
  stylers?: Array<StylerModel<TProps> | StyleModel>;
}

export interface UseStylesModel<TProps> {
  computedStyles: StyleModel;
  inheritedStyles: StyleModel;
  propsWithOutStyle?: Omit<TProps, 'style'>;
  styles: StyleModel;
}
