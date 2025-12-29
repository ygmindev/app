import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { testResourceImplementation } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation';
import { FIXTURES as TESTABLE_ENTITY_RESOURCE_FIXTURES } from '@lib/model/test/TestableEntityResource/TestableEntityResource.fixtures';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { TestableEntityResourceImplementation } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { FIXTURES as TESTABLE_RELATED_RESOURCE_FIXTURES } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.fixtures';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { TestableRelatedResourceImplementation } from '@lib/model/test/TestableRelatedResource/TestableRelatedResourceImplementation/TestableRelatedResourceImplementation';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { expectEqualsTestableResource } from '@lib/shared/test/utils/expectEqualsTestableResource/expectEqualsTestableResource';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEntityResourceImplementation });

describe(displayName, () => {
  let implementation: ResourceImplementationModel<TestableEntityResourceModel>;
  let relatedImplementation: ResourceImplementationModel<TestableRelatedResourceModel>;
  const [formData] = [...TESTABLE_ENTITY_RESOURCE_FIXTURES];
  const [relatedFormData1, relatedFormData2] = [...TESTABLE_RELATED_RESOURCE_FIXTURES];
  const related = [relatedFormData1, relatedFormData2];

  const getImplementation = (): ResourceImplementationModel<
    TestableEntityResourceModel,
    undefined
  > => Container.get(TestableEntityResourceImplementation);

  beforeAll(async () => {
    implementation = getImplementation();
    relatedImplementation = Container.get(TestableRelatedResourceImplementation);
  });

  void testResourceImplementation({ form: formData, getImplementation });

  test('create related one to many', async () => {
    const form = { ...formData, relatedOneToMany: related };
    const { result: createResult } = await implementation.create({ form });
    if (!createResult?._id) throw new NotFoundError('createResult');
    expectEqualsTestableResource(createResult, form);
    const { result: relatedResult } = await relatedImplementation.getMany({
      filter: [{ field: 'rootManyToOne', value: createResult._id }],
    });
    expectEqualsTestableResource(relatedResult?.items, related);
    relatedResult?.items.forEach((v) => v.rootManyToOne?._id === createResult._id);

    // test orphan removal
    const ids = relatedResult?.items?.map((v) => v._id ?? '');
    expect((await implementation.remove({ id: [createResult._id] })).result).toBeTruthy();
    expect((await implementation.get({ id: createResult._id })).result).toBeFalsy();
    const relatedResult2 = (await relatedImplementation.getMany({ id: ids })).result;
    expect(relatedResult2?.items).toStrictEqual([]);
  });

  test('create related many to many', async () => {
    const form = { ...formData, relatedManyToMany: related };
    const { result: createResult } = await implementation.create({ form });
    if (!createResult?._id) throw new NotFoundError('createResult');
    expectEqualsTestableResource(createResult, form);
    const { result: relatedResult } = await relatedImplementation.getMany({
      filter: [{ field: 'rootManyToMany', value: createResult._id }],
    });
    expectEqualsTestableResource(relatedResult?.items, related);
    relatedResult?.items.forEach((v) =>
      v.rootManyToMany?.map((vv) => vv._id).includes(createResult._id),
    );
  });
});
