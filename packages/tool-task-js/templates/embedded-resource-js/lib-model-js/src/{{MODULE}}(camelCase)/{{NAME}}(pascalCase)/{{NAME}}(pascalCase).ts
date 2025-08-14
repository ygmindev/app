import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import {
  type {{NAME}}(pascalCase)Model,
} from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({
  isDatabase: true,
  name: {{NAME}}(constantCase)_RESOURCE_NAME,
})
export class {{NAME}}(pascalCase) extends EntityResource implements {{NAME}}(pascalCase)Model {
  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  name!: string;
}
