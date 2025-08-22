import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { TestableResourceModel } from '@lib/model/test/TestableResource/TestableResource.models';

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

  @withField({ isDatabase: true })
  group!: string;

  @withField({ isDatabase: true })
  index!: number;

  @withField({ isDatabase: true, isOptional: true })
  number?: number;

  @withField({ isDatabase: true })
  string!: string;

  @withField({ isDatabase: true, isOptional: true })
  stringArray?: Array<string>;

  @withField({ isDatabase: true, isOptional: true })
  stringOptional?: string;
}
