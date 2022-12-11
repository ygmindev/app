import type { _AnimatablePropsModel } from '@lib/frontend/animation/components/Animatable/_Animatable.models';
import type { ANIMATABLE_TYPE } from '@lib/frontend/animation/components/Animatable/Animatable.constants';

export type AnimatableTypeModel = `${ANIMATABLE_TYPE}`;

export interface AnimatablePropsModel extends _AnimatablePropsModel {}
