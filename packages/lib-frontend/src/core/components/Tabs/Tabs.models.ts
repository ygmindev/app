import type { OptionModel } from '@lib/frontend/core/core.models';
import type { FieldPropsModel } from '@lib/frontend/form/form.models';

export interface TabsPropsModel extends FieldPropsModel {
  isVertical?: boolean;
  tabs: Array<OptionModel>;
}
