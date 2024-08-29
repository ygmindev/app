import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withRefField } from '@lib/backend/resource/utils/withRefField/withRefField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import { type {{NAME}}(pascalCase)Model } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { {{NAME_ROOT}}(pascalCase) } from '@lib/backend/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase)';
import { type {{NAME_ROOT}}(pascalCase)Model } from '@lib/shared/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';

@withEntity({ isEmbeddable: true, isDatabase: true, name: {{NAME}}(constantCase)_RESOURCE_NAME })
export class {{NAME}}(pascalCase) extends EmbeddedResource implements {{NAME}}(pascalCase)Model {
  @withRefField({ Resource: () => User })
  _{{NAME_ROOT}}(camelCase)?: RefFieldModel<{{NAME_ROOT}}(pascalCase)Model>;

  @withField({ isOptional: true, isDatabase: true, type: DATA_TYPE.STRING })
  name?: string;
}
