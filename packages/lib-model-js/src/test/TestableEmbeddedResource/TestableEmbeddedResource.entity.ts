import { withEmbeddedEntity } from '@lib/backend/resource/utils/withEmbeddedEntity/withEmbeddedEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
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
  @withField({
    Resource: () => Date,
    expire: DATABASE_CONFIG.expireSeconds,
    isDatabase: true,
    isOptional: true,
    type: DATA_TYPE.DATE,
  })
  date: Date = new Date();

  @withField({ isDatabase: true })
  group!: string;

  @withField({ isDatabase: true, type: DATA_TYPE.NUMBER })
  index!: number;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  number?: number;

  @withField({ isDatabase: true })
  string!: string;

  @withField({ isArray: true, isDatabase: true, isOptional: true })
  stringArray?: Array<string>;

  @withField({ isDatabase: true, isOptional: true })
  stringOptional?: string;
}

export default TestableEmbeddedResource;
