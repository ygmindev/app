import { type PressableItemPropsModel } from '@lib/frontend/core/components/PressableItem/PressableItem.models';
import {
  type ChildrenPropsModel,
  type ElementStateModel,
  type SizablePropsModel,
} from '@lib/frontend/core/core.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';

export type AccordionPropsModel = ChildrenPropsModel &
  SizablePropsModel &
  ValuePropsModel<ElementStateModel> &
  Omit<PressableItemPropsModel, 'border' | 'children' | 'onPress'> & {
    isTransparent?: boolean;
  };
