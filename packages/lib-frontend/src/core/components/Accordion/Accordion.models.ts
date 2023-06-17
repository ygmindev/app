import type {
  ChildrenPropsModel,
  ElementStateModel,
  ValuePropsModel,
} from '#lib-frontend/core/core.models';

export type AccordionPropsModel = {
  label?: string;
} & ChildrenPropsModel &
  ValuePropsModel<ElementStateModel>;
