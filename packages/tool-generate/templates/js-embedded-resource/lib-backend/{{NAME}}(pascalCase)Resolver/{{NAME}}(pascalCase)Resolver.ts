import { withResolver } from '@lib/backend/graphql/decorators/withResolver/withResolver';
import { EmbeddedResourceResolver } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver';
import type { EmbeddedResourceResolverModel } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver.models';
import { {{NAME}}(pascalCase) } from '@lib/backend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)';
import { {{NAME}}(pascalCase)Service } from '@lib/backend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Service/{{NAME}}(pascalCase)Service';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import type {
  {{NAME}}(pascalCase)FormModel,
  {{NAME}}(pascalCase)Model,
} from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import type { DummyEntityResourceModel } from '@lib/shared/{{MODULE}}(camelCase)/resources/DummyEntityResource/DummyEntityResource.models';

@withContainer()
@withResolver()
export class {{NAME}}(pascalCase)Resolver
  extends EmbeddedResourceResolver<
    {{NAME}}(pascalCase)Model,
    {{NAME}}(pascalCase)FormModel,
    DummyEntityResourceModel
  >({
    Resource: {{NAME}}(pascalCase),
    ResourceService: {{NAME}}(pascalCase)Service,
    name: {{NAME}}(constantCase)_RESOURCE_NAME,
  })
  implements
    EmbeddedResourceResolverModel<
      {{NAME}}(pascalCase)Model,
      {{NAME}}(pascalCase)FormModel,
      DummyEntityResourceModel
    > {}
