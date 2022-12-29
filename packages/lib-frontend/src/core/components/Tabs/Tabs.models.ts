import type { FieldPropsModel, OptionModel } from '@lib/frontend/core/core.models';

export interface TabsPropsModel extends FieldPropsModel {
  isVertical?: boolean;
  tabs: Array<OptionModel>;
}
