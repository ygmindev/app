import type { ReactElement } from 'react';

import type { AnimatablePropsModel } from '#lib-frontend/animation/animation.models';
import type { WrapperPropsModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export interface PressablePropsModel
  extends ChildrenPropsModel<ReactElement>,
    Omit<WrapperPropsModel, 'children'>,
    AnimatablePropsModel {
  confirmMessage?: TranslatableTextModel;
}
