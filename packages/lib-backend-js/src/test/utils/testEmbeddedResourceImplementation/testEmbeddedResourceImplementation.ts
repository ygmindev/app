import { TestableEntityResourceImplementation } from '@lib/backend/test/resources/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { type TestEmbeddedResourceImplementationParamsModel } from '@lib/backend/test/utils/testEmbeddedResourceImplementation/testEmbeddedResourceImplementation.models';
import { testResourceImplementation } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const testEmbeddedResourceImplementation = async ({
  form,
  getImplementation,
}: TestEmbeddedResourceImplementationParamsModel): Promise<void> =>
  testResourceImplementation({
    form,
    getImplementation,
    root: async () =>
      (await Container.get(TestableEntityResourceImplementation).getMany()).result?.[0]?._id,
  });
