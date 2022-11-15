import type { ANIMATION_TYPE } from '@lib/frontend/animation/components/Animation/Animation.constants';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { StyleModel } from '@lib/frontend/styling/styling.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export type AnimationTypeModel = `${ANIMATION_TYPE}`;

export type AnimationPropsModel = WithChildrenPropsModel &
  WithTestIdModel &
  WrapperPropsModel & {
    duration?: number;
    isVisible?: boolean;
  } & (
    | {
        from?: StyleModel;
        isScalable?: never;
        to?: StyleModel;
        type?: never;
      }
    | {
        from?: never;
        isScalable?: boolean;
        to?: never;
        type?: typeof ANIMATION_TYPE.APPEAR;
      }
    | {
        from?: never;
        isScalable?: never;
        to?: never;
        type?: typeof ANIMATION_TYPE.SLIDE;
      }
  );
