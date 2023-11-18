import { type LineItemPropsModel } from '#lib-frontend/core/components/LineItem/LineItem.models';
import { type ChildrenPropsModel, type ElementStateModel } from '#lib-frontend/core/core.models';
import { type ValuePropsModel } from '#lib-frontend/data/data.models';

export type AccordionPropsModel = ChildrenPropsModel &
  ValuePropsModel<ElementStateModel> &
  Omit<LineItemPropsModel, 'border' | 'children' | 'onPress'>;
