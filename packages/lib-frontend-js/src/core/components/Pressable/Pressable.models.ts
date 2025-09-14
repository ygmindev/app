import { type AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import { type ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import {
  type WrapperPropsModel,
  type WrapperRefModel,
} from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type THEME_COLOR } from '@lib/frontend/style/style.constants';
import { type TestIdPropsModel } from '@lib/frontend/test/test.models';

export type PressablePropsModel = TestIdPropsModel &
  Pick<ActivatablePropsModel, 'children'> &
  Omit<WrapperPropsModel, 'children'> &
  AnimatablePropsModel &
  Pick<
    ActivatablePropsModel,
    'onActive' | 'onInactive' | 'onHoverIn' | 'onHoverOut' | 'trigger'
  > & {
    confirmColor?: THEME_COLOR;
    confirmMessage?: AsyncTextModel;
    tooltip?: AsyncTextModel;
  };

export type PressableRefModel = WrapperRefModel;
