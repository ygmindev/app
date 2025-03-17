import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import {
  type TestableResourceFormModel,
  type TestableResourceModel,
} from '@lib/shared/test/resources/TestableResource/TestableResource.models';

export type TestResourceImplementationParamsModel<
  TType extends TestableResourceModel,
  TForm extends TestableResourceFormModel,
  TRoot extends unknown = undefined,
> = {
  before?(params: ResourceImplementationModel<TType, TForm, TRoot>): Promise<void>;
  form: TForm;
  getImplementation(): ResourceImplementationModel<TType, TForm, TRoot>;
  root?(): Promise<TRoot extends undefined ? never : string | undefined>;
};
