import { type TestableResourceModel } from '@lib/model/test/TestableResource/TestableResource.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type TestResourceImplementationParamsModel<
  TType extends TestableResourceModel,
  TRoot extends unknown = undefined,
> = {
  form: Partial<TType>;
  getImplementation(): ResourceImplementationModel<TType, TRoot>;
  root?(): Promise<TRoot extends undefined ? never : string | undefined>;
};
