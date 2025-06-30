import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';

export type TestableEntityResourceImplementationModel =
  EntityResourceImplementationModel<TestableEntityResourceModel>;
