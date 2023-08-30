import { type RESOURCE_FILTER_PROPERTY_TYPE } from '#lib-frontend/resource/components/ResourceFilterField/ResourceFilterField.constants';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type ResourceFilterFieldPropsModel<
  TType,
  TForm = undefined,
  TRoot = undefined,
> = WithIdModel<StringKeyModel<TType>> & {
  type?: ResourceFilterFieldTypeModel;
};

export type ResourceFilterFieldTypeModel = `${RESOURCE_FILTER_PROPERTY_TYPE}`;
