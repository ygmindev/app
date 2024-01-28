import { {{NAME}}(pascalCase) } from '@lib/backend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)';
import { {{NAME}}(pascalCase)Implementation } from '@lib/backend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Implementation/{{NAME}}(pascalCase)Implementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import {
  type {{NAME}}(pascalCase)FormModel,
  type {{NAME}}(pascalCase)Model,
} from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type {{NAME}}(pascalCase)ResolverModel } from '@lib/backend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Resolver/{{NAME}}(pascalCase)Resolver.models';

@withContainer()
@withResolver({ Resource: () => {{NAME}}(pascalCase) })
export class {{NAME}}(pascalCase)Resolver
  extends createEntityResourceResolver<{{NAME}}(pascalCase)Model, {{NAME}}(pascalCase)FormModel>({
    Resource: () => {{NAME}}(pascalCase),
    ResourceImplementation: {{NAME}}(pascalCase)Implementation,
    name: {{NAME}}(constantCase)_RESOURCE_NAME,
  })
  implements {{NAME}}(pascalCase)ResolverModel {}
