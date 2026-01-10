import { databaseConfig as configBase } from '@lib/config/database/database.mongo';
import { Snapshot } from '@lib/model/test/Snapshot/Snapshot.entity';
import { TestableEmbeddedResource } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.entity';
import { TestableEntityResource } from '@lib/model/test/TestableEntityResource/TestableEntityResource.entity';
import { TestableRelatedResource } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.entity';

export const databaseConfig = configBase.extend(() => ({
  entities: [Snapshot, TestableEntityResource, TestableEmbeddedResource, TestableRelatedResource],
}));
