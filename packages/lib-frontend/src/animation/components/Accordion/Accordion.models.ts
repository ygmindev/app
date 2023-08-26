import { type ChildrenPropsModel, type ElementStateModel } from '#lib-frontend/core/core.models';
import { type ValuePropsModel } from '#lib-frontend/form/form.models';

export type AccordionPropsModel = ChildrenPropsModel &
  ValuePropsModel<ElementStateModel> & {
    label?: string;
  };
