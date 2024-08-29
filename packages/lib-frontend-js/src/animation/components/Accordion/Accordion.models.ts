import { type PressableTitlePropsModel } from '@lib/frontend/core/components/PressableTitle/PressableTitle.models';
import {
  type ChildrenPropsModel,
  type ElementStateModel,
  type SizablePropsModel,
} from '@lib/frontend/core/core.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';

export type AccordionPropsModel = ChildrenPropsModel &
  SizablePropsModel &
  ValuePropsModel<ElementStateModel> &
  Omit<PressableTitlePropsModel, 'border' | 'children' | 'onPress'> & {
    isTransparent?: boolean;
  };
