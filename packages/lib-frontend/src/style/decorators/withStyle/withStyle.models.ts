import type { StyleModel } from '@lib/frontend/style/style.models';

export interface WithStyleModel {
  style?: StyleModel | Array<StyleModel>;
}
