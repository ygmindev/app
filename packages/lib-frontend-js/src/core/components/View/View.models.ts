import { type _ViewPropsModel } from '@lib/frontend/core/components/View/_View.models';
import { type SCROLL_TYPE } from '@lib/frontend/core/components/View/View.constants';
import { type PositionModel } from '@lib/frontend/core/core.models';

export type ViewPropsModel = _ViewPropsModel;

export type ScrollableViewRefModel = {
  scrollTo(params: PositionModel): void;
};

export type ViewRefModel = ScrollableViewRefModel;

export type ScrollTypeModel = `${SCROLL_TYPE}`;
