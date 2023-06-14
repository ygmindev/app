import type { _ViewPropsModel } from '#lib-frontend/core/components/View/_View.models';
import type { PositionModel } from '#lib-frontend/core/core.models';

export interface ViewPropsModel extends _ViewPropsModel {}

export interface ScrollableViewRefModel {
  scrollTo(params: PositionModel): void;
}

export interface ViewRefModel extends ScrollableViewRefModel {}
