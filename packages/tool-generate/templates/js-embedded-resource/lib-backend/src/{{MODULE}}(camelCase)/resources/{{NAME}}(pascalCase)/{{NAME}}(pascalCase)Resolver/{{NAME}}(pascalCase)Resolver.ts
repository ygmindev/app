import { withResolver } from '#lib-backend/http/decorators/withResolver/withResolver';
import { EmbeddedResourceResolver } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver';
import { {{NAME}}(pascalCase) } from '#lib-backend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)';
import { {{NAME}}(pascalCase)Service } from '#lib-backend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Service/{{NAME}}(pascalCase)Service';
import type { {{NAME}}(pascalCase)ServiceModel } from '#lib-backend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Service/{{NAME}}(pascalCase)Service.models';
import { {{NAME_ROOT}}(pascalCase) } from '#lib-backend/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase)';
import { withContainer } from '#lib-backend/core/decorators/withContainer/withContainer';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import type {
  {{NAME}}(pascalCase)FormModel,
  {{NAME}}(pascalCase)Model,
} from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import type { {{NAME_ROOT}}(pascalCase)Model } from '#lib-shared/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';

@withContainer()
@withResolver({ Resource: {{NAME}}(pascalCase) })
export class {{NAME}}(pascalCase)Resolver
  extends EmbeddedResourceResolver<
    {{NAME}}(pascalCase)Model,
    {{NAME}}(pascalCase)FormModel,
    {{NAME_ROOT}}(pascalCase)Model
  >({
    Resource: {{NAME}}(pascalCase),
    ResourceService: {{NAME}}(pascalCase)Service,
    RootResource: {{NAME_ROOT}}(pascalCase),
    name: {{NAME}}(constantCase)_RESOURCE_NAME,
  })
  implements {{NAME}}(pascalCase)ServiceModel {}
