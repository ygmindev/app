import { withResolver } from '@lib/backend/http/decorators/withResolver/withResolver';
import { EntityResourceResolver } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import type { EntityResourceResolverModel } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.models';
import { {{NAME}}(pascalCase) } from '@lib/backend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)';
import { {{NAME}}(pascalCase)Service } from '@lib/backend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Service/{{NAME}}(pascalCase)Service';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import type {
  {{NAME}}(pascalCase)FormModel,
  {{NAME}}(pascalCase)Model,
} from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

@withContainer()
@withResolver({ Resource: {{NAME}}(pascalCase) })
export class {{NAME}}(pascalCase)Resolver
  extends EntityResourceResolver<{{NAME}}(pascalCase)Model, {{NAME}}(pascalCase)FormModel>({
    Resource: {{NAME}}(pascalCase),
    ResourceService: {{NAME}}(pascalCase)Service,
    name: {{NAME}}(constantCase)_RESOURCE_NAME,
  })
  implements EntityResourceResolverModel<{{NAME}}(pascalCase)Model, {{NAME}}(pascalCase)FormModel> {}