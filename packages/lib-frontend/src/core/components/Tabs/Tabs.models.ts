import { type TABS_TYPE } from '#lib-frontend/core/components/Tabs/Tabs.constants';
import { type OptionModel } from '#lib-frontend/core/core.models';
import { type StringFieldPropsModel } from '#lib-frontend/form/form.models';

export type TabsPropsModel = StringFieldPropsModel & {
  tabs?: Array<TabModel>;
  type?: TabsTypeModel;
};

export type TabModel = OptionModel;

export type TabsTypeModel = `${TABS_TYPE}`;
