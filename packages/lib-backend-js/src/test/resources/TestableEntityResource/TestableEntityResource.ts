import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';

@withEntity({ isDatabase: true, name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME })
export class TestableEntityResource extends EntityResource implements TestableEntityResourceModel {
  @withField({
    defaultValue: () => new Date(),
    expire: DATABASE_CONFIG.expireSeconds,
    isOptional: true,
    isDatabase: true,
    type: DATA_TYPE.DATE,
  })
  dateTtlProperty?: Date;

  @withField({ isOptional: true, isDatabase: true, type: DATA_TYPE.NUMBER })
  numberProperty?: number;

  @withField({ isArray: true, isOptional: true, isDatabase: true, type: DATA_TYPE.STRING })
  stringArrayField?: Array<string>;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  stringField!: string;

  @withField({ isOptional: true, isDatabase: true, type: DATA_TYPE.STRING })
  stringFieldOptional?: string;
}
