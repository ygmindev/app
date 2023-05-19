import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/shared/{{MODULE}}(pathCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import type { {{NAME}}(pascalCase)Model } from '@lib/shared/{{MODULE}}(pathCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

@withEntity({ isEmbedded: true, isRepository: true, name: {{NAME}}(constantCase)_RESOURCE_NAME })
export class {{NAME}}(pascalCase) extends EmbeddedResource implements {{NAME}}(pascalCase)Model {}
