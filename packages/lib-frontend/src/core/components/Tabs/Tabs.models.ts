import { type TABS_TYPE } from '#lib-frontend/core/components/Tabs/Tabs.constants';
import { type OptionModel } from '#lib-frontend/core/core.models';
import { type ValuePropsModel } from '#lib-frontend/form/form.models';

export type TabsPropsModel = ValuePropsModel & {
  tabs?: Array<TabModel>;
  type?: TabsTypeModel;
};

export type TabModel = OptionModel;

export type TabsTypeModel = `${TABS_TYPE}`;
