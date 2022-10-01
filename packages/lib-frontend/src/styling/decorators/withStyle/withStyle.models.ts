import type { StyleModel } from '@lib/frontend/styling/styling.models';

export interface WithStyleParamsModel {
  style?: StyleModel | Array<StyleModel>;
}
