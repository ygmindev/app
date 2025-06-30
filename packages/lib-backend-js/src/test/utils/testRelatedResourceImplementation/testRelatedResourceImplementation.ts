import { TestableEntityResourceImplementation } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { type TestRelatedResourceImplementationParamsModel } from '@lib/backend/test/utils/testRelatedResourceImplementation/testRelatedResourceImplementation.models';
import { testResourceImplementation } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const testRelatedResourceImplementation = async ({
  form,
  getImplementation,
}: TestRelatedResourceImplementationParamsModel): Promise<void> =>
  testResourceImplementation({
    form,
    getImplementation,
    root: async () =>
      (await Container.get(TestableEntityResourceImplementation).getMany()).result?.[0]?._id,
  });
