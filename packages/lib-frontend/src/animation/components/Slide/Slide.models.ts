import type { ChildrenPropsModel, MeasureModel } from '#lib-frontend/core/core.models';

export type SlidePropsModel = {
  isBack?: boolean;
  measure?: MeasureModel;
} & ChildrenPropsModel;
