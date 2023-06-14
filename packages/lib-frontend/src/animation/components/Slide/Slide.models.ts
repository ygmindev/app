import type { ChildrenPropsModel, MeasureModel } from '#lib-frontend/core/core.models';

export interface SlidePropsModel extends ChildrenPropsModel {
  isBack?: boolean;
  measure?: MeasureModel;
}
