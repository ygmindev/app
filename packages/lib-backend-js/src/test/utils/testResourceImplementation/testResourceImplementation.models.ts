import { type EntityResourceDataModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type TestableResourceModel } from '@lib/shared/test/resources/TestableResource/TestableResource.models';

export type TestResourceImplementationParamsModel<
  TType extends TestableResourceModel,
  TRoot extends unknown = undefined,
> = {
  form: EntityResourceDataModel<TType>;
  getImplementation(): ResourceImplementationModel<TType, TRoot>;
  root?(): Promise<TRoot extends undefined ? never : string | undefined>;
};
