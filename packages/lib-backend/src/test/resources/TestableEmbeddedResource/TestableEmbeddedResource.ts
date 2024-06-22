import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.constants';
import { type TestableEmbeddedResourceModel } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';

@withEntity({
  isEmbeddable: true,
  isDatabase: true,
  name: TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME,
})
export class TestableEmbeddedResource
  extends EmbeddedResource
  implements TestableEmbeddedResourceModel
{
  @withField({ isOptional: true, isDatabase: true, type: DATA_TYPE.NUMBER })
  numberProperty?: number;

  @withField({ isArray: true, isOptional: true, isDatabase: true, type: DATA_TYPE.STRING })
  stringArrayField?: Array<string>;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  stringField!: string;

  @withField({ isOptional: true, isDatabase: true, type: DATA_TYPE.STRING })
  stringFieldOptional?: string;

  @withField({
    defaultValue: () => new Date(),
    expire: DATABASE_CONFIG.expireSeconds,
    isOptional: true,
    isDatabase: true,
    type: DATA_TYPE.DATE,
  })
  dateTtlProperty?: Date;
}
