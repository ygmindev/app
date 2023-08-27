import { type SubmittablePropsModel } from '#lib-frontend/data/data.models';
import { type ResourceFilterFieldTypeModel } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField.models';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export type ResourceFilterFormPropsModel<
  TType,
  TForm = undefined,
  TRoot = undefined,
> = SubmittablePropsModel<Array<FilterModel<TType>>> & {
  filters?: Array<WithIdModel<StringKeyModel<TType>> & { type?: ResourceFilterFieldTypeModel }>;
};
