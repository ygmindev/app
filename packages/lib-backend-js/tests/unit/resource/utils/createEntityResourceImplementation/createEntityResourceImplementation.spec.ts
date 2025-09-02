import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { testResourceImplementation } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/model/test/TestableEntityResource/TestableEntityResource.fixtures';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { TestableEntityResourceImplementation } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { TESTABLE_RELATED_RESOURCE_SEED_DATA } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.fixtures';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { TestableRelatedResourceImplementation } from '@lib/model/test/TestableRelatedResource/TestableRelatedResourceImplementation/TestableRelatedResourceImplementation';
import { type PartialArrayModel } from '@lib/shared/core/core.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { expectEqualsTestableResource } from '@lib/shared/test/utils/expectEqualsTestableResource/expectEqualsTestableResource';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEntityResourceImplementation });

describe(displayName, () => {
  let implementation: ResourceImplementationModel<TestableEntityResourceModel>;
  let relatedImplementation: ResourceImplementationModel<TestableRelatedResourceModel>;
  const [formData] = TESTABLE_ENTITY_RESOURCE_SEED_DATA;
  const [relatedFormData1, relatedFormData2] = TESTABLE_RELATED_RESOURCE_SEED_DATA;

  const getImplementation = (): ResourceImplementationModel<
    TestableEntityResourceModel,
    undefined
  > => Container.get(TestableEntityResourceImplementation);

  beforeAll(async () => {
    implementation = getImplementation();
    relatedImplementation = Container.get(TestableRelatedResourceImplementation);
  });

  const testRelatedCreate = async (): Promise<{
    createResult: Partial<TestableEntityResourceModel>;
    relatedManyToMany: PartialArrayModel<TestableRelatedResourceModel>;
    relatedOneToMany: PartialArrayModel<TestableRelatedResourceModel>;
  }> => {
    const related = [relatedFormData1, relatedFormData2];
    const form = { ...formData, relatedOneToMany: related };
    const { result: createResult } = await implementation.create({ form });
    if (!createResult) throw new NotFoundError('createResult');
    expect(createResult).toBeDefined();
    expectEqualsTestableResource(createResult, form);
    const { result: relatedOneToMany } = await relatedImplementation.getMany({
      filter: [{ field: 'rootManyToOne', value: createResult._id ?? '' }],
    });
    // const { result: relatedManyToMany } = await relatedImplementation.getMany({
    //   filter: [{ field: 'rootManyToMany', value: createResult._id ?? '' }],
    // });
    return {
      createResult,
      relatedManyToMany: [],
      relatedOneToMany: relatedOneToMany ?? [],
    };
  };

  void testResourceImplementation({ form: formData, getImplementation });

  test('create related one to many', async () => {
    await testRelatedCreate();
  });

  test('delete related one to many', async () => {
    const { createResult, relatedOneToMany } = await testRelatedCreate();

    // test delete root
    expect((await implementation.remove({ id: [createResult._id ?? ''] })).result).toBeTruthy();
    const { result: relatedResult } = await relatedImplementation.getMany({
      id: relatedOneToMany.map((v) => v._id ?? ''),
    });

    expect(relatedResult).toStrictEqual([]);
  });
});
