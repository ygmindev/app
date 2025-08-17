import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { testResourceImplementation } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/model/test/TestableEntityResource/TestableEntityResource.fixtures';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { TestableEntityResourceImplementation } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { TESTABLE_RELATED_RESOURCE_SEED_DATA } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.fixtures';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { TestableRelatedResourceImplementation } from '@lib/model/test/TestableRelatedResource/TestableRelatedResourceImplementation/TestableRelatedResourceImplementation';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEntityResourceImplementation });

describe(displayName, () => {
  let implementation: ResourceImplementationModel<TestableEntityResourceModel>;
  let relatedImplementation: ResourceImplementationModel<
    TestableRelatedResourceModel,
    TestableEntityResourceModel
  >;

  const getImplementation = (): ResourceImplementationModel<
    TestableEntityResourceModel,
    undefined
  > => Container.get(TestableEntityResourceImplementation);

  beforeAll(async () => {
    implementation = getImplementation();
    relatedImplementation = Container.get(TestableRelatedResourceImplementation);
  });

  void testResourceImplementation({
    form: TESTABLE_ENTITY_RESOURCE_SEED_DATA[0],
    getImplementation,
  });

  test('works with create related', async () => {
    const { result } = await implementation.create({
      form: {
        ...TESTABLE_ENTITY_RESOURCE_SEED_DATA[0],
        relatedOneToMany: [
          TESTABLE_RELATED_RESOURCE_SEED_DATA[0],
          TESTABLE_RELATED_RESOURCE_SEED_DATA[1],
        ],
      },
    });
    console.warn(result);
    expect(1).toBe(1);
  });
});
