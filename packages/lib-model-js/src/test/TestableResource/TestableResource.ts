import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { TestableResourceModel } from '@lib/model/test/TestableResource/TestableResource.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withDatabaseEntity({ isAbstract: true })
export class TestableResource extends EntityResource implements TestableResourceModel {
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
