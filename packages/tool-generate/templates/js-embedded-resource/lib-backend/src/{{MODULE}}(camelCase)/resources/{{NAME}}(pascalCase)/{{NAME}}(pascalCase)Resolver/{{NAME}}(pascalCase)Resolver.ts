import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { {{NAME}}(pascalCase) } from '#lib-backend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)';
import { type {{NAME}}(pascalCase)ResolverModel } from '#lib-backend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Resolver/{{NAME}}(pascalCase)Resolver.models';
import { {{NAME}}(pascalCase)Service } from '#lib-backend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Service/{{NAME}}(pascalCase)Service';
import { {{NAME_ROOT}}(pascalCase) } from '#lib-backend/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase)';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '#lib-backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import {
  type {{NAME}}(pascalCase)FormModel,
  type {{NAME}}(pascalCase)Model,
} from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type {{NAME_ROOT}}(pascalCase)Model } from '#lib-shared/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';

@withContainer()
@withResolver({ Resource: () => {{NAME}}(pascalCase) })
export class {{NAME}}(pascalCase)Resolver
  extends createEmbeddedResourceResolver<{{NAME}}(pascalCase)Model, {{NAME}}(pascalCase)FormModel, {{NAME_ROOT}}(pascalCase)Model>({
    Resource: () => {{NAME}}(pascalCase),
    ResourceService: {{NAME}}(pascalCase)Service,
    RootResource: () => {{NAME_ROOT}}(pascalCase),
    name: {{NAME}}(constantCase)_RESOURCE_NAME,
  })
  implements {{NAME}}(pascalCase)ResolverModel {}
