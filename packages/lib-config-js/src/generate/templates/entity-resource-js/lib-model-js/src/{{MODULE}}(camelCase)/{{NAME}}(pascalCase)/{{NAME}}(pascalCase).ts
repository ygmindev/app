import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import {
  type {{NAME}}(pascalCase)Model,
} from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

@withDatabaseEntity({ name: {{NAME}}(constantCase)_RESOURCE_NAME })
export class {{NAME}}(pascalCase) extends EntityResource implements {{NAME}}(pascalCase)Model {
  @withDatabaseField()
  name!: string;
}
