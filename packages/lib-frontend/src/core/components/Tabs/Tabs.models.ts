import type { OptionModel } from '#lib-frontend/core/core.models';
import type { StringFieldPropsModel } from '#lib-frontend/form/form.models';

export interface TabsPropsModel extends StringFieldPropsModel {
  isVertical?: boolean;
  tabs: Array<OptionModel>;
}
