import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { testResourceImplementation } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/model/test/TestableEntityResource/TestableEntityResource.fixtures';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { TestableEntityResourceImplementation } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { TESTABLE_RELATED_RESOURCE_SEED_DATA } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.fixtures';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { TestableRelatedResourceImplementation } from '@lib/model/test/TestableRelatedResource/TestableRelatedResourceImplementation/TestableRelatedResourceImplementation';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
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
    const form = {
      ...TESTABLE_ENTITY_RESOURCE_SEED_DATA[0],
      relatedOneToMany: [
        { ...TESTABLE_RELATED_RESOURCE_SEED_DATA[0], isFixture: true },
        { ...TESTABLE_RELATED_RESOURCE_SEED_DATA[1], isFixture: true },
      ],
    };
    const { result } = await implementation.create({ form });
    expect(result?._id).toBeDefined();
    expect(result?.created).toBeDefined();
    expect(result?.string).toStrictEqual(form.string);
    expect(result?.relatedOneToMany?.length).toStrictEqual(form.relatedOneToMany.length);

    const relatedIds = filterNil(result?.relatedOneToMany?.map((v) => v._id));
    const { result: relatedResult } = await relatedImplementation.getMany({ id: relatedIds });
    expect(relatedResult?.length).toStrictEqual(form.relatedOneToMany.length);
  });

  test('works with delete related', async () => {
    Container.get(Database, DATABASE_TYPE.MONGO).getRepositories();
    const form = {
      ...TESTABLE_ENTITY_RESOURCE_SEED_DATA[0],
      relatedOneToMany: [
        { ...TESTABLE_RELATED_RESOURCE_SEED_DATA[0], isFixture: true },
        { ...TESTABLE_RELATED_RESOURCE_SEED_DATA[1], isFixture: true },
      ],
    };
    const { result } = await implementation.create({ form });
    if (result?._id) {
      const relatedIds = filterNil(result?.relatedOneToMany?.map((v) => v._id) ?? []);
      const { result: relatedResultExists } = await relatedImplementation.getMany({
        id: relatedIds,
      });
      expect(relatedResultExists?.map((v) => v._id)).toStrictEqual(relatedIds);

      await implementation.remove({ id: [result?._id] });
      const { result: relatedResultUnknown } = await relatedImplementation.getMany({
        id: relatedIds,
      });
      expect(relatedResultUnknown).toStrictEqual([]);
    }
  });
});
