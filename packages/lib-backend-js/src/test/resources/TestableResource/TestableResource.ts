import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { TestableResourceModel } from '@lib/shared/test/resources/TestableResource/TestableResource.models';

@withEntity({ isAbstract: true, isDatabase: true })
export class TestableResource extends EntityResource implements TestableResourceModel {
  @withField({
    expire: DATABASE_CONFIG.expireSeconds,
    isDatabase: true,
    isOptional: true,
    Resource: () => Date,
  })
  date?: Date = new Date();

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
