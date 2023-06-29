import {
  type ChildrenPropsModel,
  type ElementStateModel,
  type ValuePropsModel,
} from '#lib-frontend/core/core.models';

export type AccordionPropsModel = {
  label?: string;
} & ChildrenPropsModel &
  ValuePropsModel<ElementStateModel>;
