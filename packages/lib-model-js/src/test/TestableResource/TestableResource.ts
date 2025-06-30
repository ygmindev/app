import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { TestableResourceModel } from '@lib/model/test/TestableResource/TestableResource.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isAbstract: true, isDatabase: true })
export class TestableResource extends EntityResource implements TestableResourceModel {
  @withField({
    Resource: () => Date,
    defaultValue: () => new Date(),
    expire: DATABASE_CONFIG.expireSeconds,
    isDatabase: true,
    isOptional: true,
  })
  date!: Date;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  group!: string;

  @withField({ isDatabase: true, type: DATA_TYPE.NUMBER })
  index!: number;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  number?: number;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  string!: string;

  @withField({ isArray: true, isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  stringArray?: Array<string>;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  stringOptional?: string;
}
