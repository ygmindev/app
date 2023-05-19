import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/shared/{{MODULE}}(pathCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import type { {{NAME}}(pascalCase)Model } from '@lib/shared/{{MODULE}}(pathCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

@withEntity({ isRepository: true, name: {{NAME}}(constantCase)_RESOURCE_NAME })
export class {{NAME}}(pascalCase) extends EntityResource implements {{NAME}}(pascalCase)Model {}
