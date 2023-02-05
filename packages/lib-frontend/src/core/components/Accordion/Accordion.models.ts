import type { ChildrenPropsModel, ValuePropsModel } from '@lib/frontend/core/core.models';

export interface AccordionPropsModel extends ChildrenPropsModel, ValuePropsModel<boolean> {
  label?: string;
}
