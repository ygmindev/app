import { type ResourceFilterFieldTypeModel } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField.models';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type ResourceFilterFormPropsModel<TType, TForm = undefined, TRoot = undefined> = {
  filters?: Array<WithIdModel<StringKeyModel<TType>> & { type?: ResourceFilterFieldTypeModel }>;
};
