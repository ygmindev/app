import type {
  ChildrenPropsModel,
  ElementStateModel,
  ValuePropsModel,
} from '#lib-frontend/core/core.models';

export interface AccordionPropsModel
  extends ChildrenPropsModel,
    ValuePropsModel<ElementStateModel> {
  label?: string;
}
