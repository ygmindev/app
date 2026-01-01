import { type _ScrollViewPropsModel } from '@lib/frontend/core/components/ScrollView/_ScrollView.models';
import { type PositionModel } from '@lib/frontend/core/core.models';

export type ScrollViewPropsModel = _ScrollViewPropsModel;

export type ScrollViewRefModel = {
  scrollTo(params: PositionModel & { isAnimated?: boolean }): void;
};
