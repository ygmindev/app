import { type AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import { type _AnimatableViewPropsModel } from '@lib/frontend/animation/components/AnimatableView/_AnimatableView.models';
import { type ScrollableViewRefModel } from '@lib/frontend/core/components/View/View.models';

export type AnimatableViewPropsModel = _AnimatableViewPropsModel;

export type AnimatableViewRefModel = AnimatableRefModel & ScrollableViewRefModel;
