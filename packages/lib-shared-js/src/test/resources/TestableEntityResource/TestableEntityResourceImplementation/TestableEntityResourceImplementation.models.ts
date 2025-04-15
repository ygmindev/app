import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';

export type TestableEntityResourceImplementationModel =
  EntityResourceImplementationModel<TestableEntityResourceModel>;
