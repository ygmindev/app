import { type PressableItemPropsModel } from '@lib/frontend/core/components/PressableItem/PressableItem.models';
import { type ChildrenPropsModel, type ElementStateModel } from '@lib/frontend/core/core.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';

export type AccordionPropsModel = ChildrenPropsModel &
  ValuePropsModel<ElementStateModel> &
  Omit<PressableItemPropsModel, 'border' | 'children' | 'onPress'>;
