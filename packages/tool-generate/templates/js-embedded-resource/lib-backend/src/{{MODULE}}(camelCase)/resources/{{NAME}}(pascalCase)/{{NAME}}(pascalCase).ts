import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import { type {{NAME}}(pascalCase)Model } from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

@withEntity({ isEmbeddable: true, isRepository: true, name: {{NAME}}(constantCase)_RESOURCE_NAME })
export class {{NAME}}(pascalCase) extends EmbeddedResource implements {{NAME}}(pascalCase)Model {
  @withField({ isOptional: true, type: DATA_TYPE.STRING })
  name?: string;
}
