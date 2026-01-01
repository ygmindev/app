import { type SCROLL_TYPE } from '@lib/frontend/core/components/ScrollView/ScrollView.constants';
import { type ScrollViewRefModel } from '@lib/frontend/core/components/ScrollView/ScrollView.models';
import { type _ViewPropsModel } from '@lib/frontend/core/components/View/_View.models';
import { type PositionModel } from '@lib/frontend/core/core.models';

export type _ScrollViewPropsModel = _ViewPropsModel & {
  isHorizontalScrollable?: boolean;
  isHorizontalScrollableVisible?: boolean;
  isVerticalScrollable?: boolean;
  isVerticalScrollableVisible?: boolean;
  scrollType?: SCROLL_TYPE;
  onScroll?(params: PositionModel): void;
  onScrollEnd?(): void;
};

export type _ScrollViewRefModel = ScrollViewRefModel;
