import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withEmbeddedEntity } from '@lib/backend/resource/utils/withEmbeddedEntity/withEmbeddedEntity';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import { EmbeddedResource } from '@lib/model/resource/EmbeddedResource/EmbeddedResource';
import { TESTABLE_EMBEDDED_RESOURCE_NAME } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.constants';
import { type TestableEmbeddedResourceModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEmbeddedEntity({ name: TESTABLE_EMBEDDED_RESOURCE_NAME })
export class TestableEmbeddedResource
  extends EmbeddedResource
  implements TestableEmbeddedResourceModel
{
  @withDatabaseField({
    Resource: () => Date,
    expire: DATABASE_CONFIG.expireSeconds,
    isOptional: true,
    type: DATA_TYPE.DATE,
  })
  date: Date = new Date();

  @withDatabaseField()
  group!: string;

  @withDatabaseField({ type: DATA_TYPE.NUMBER })
  index!: number;

  @withDatabaseField({ isOptional: true, type: DATA_TYPE.NUMBER })
  number?: number;

  @withDatabaseField()
  string!: string;

  @withDatabaseField({ isArray: true, isOptional: true })
  stringArray?: Array<string>;

  @withDatabaseField({ isOptional: true })
  stringOptional?: string;
}

export default TestableEmbeddedResource;
