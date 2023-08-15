import { type OptionModel } from '#lib-frontend/core/core.models';
import { type StringFieldPropsModel } from '#lib-frontend/form/form.models';

export type TabsPropsModel = {
  isVertical?: boolean;
  tabs?: Array<TabModel>;
} & StringFieldPropsModel;

export type TabModel = OptionModel;
