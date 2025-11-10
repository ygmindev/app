import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { {{NAME_ROOT}}(pascalCase)Implementation } from '@lib/backend/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase)Implementation/{{NAME_ROOT}}(pascalCase)Implementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import {
  type {{NAME}}(pascalCase)Model,
} from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type {{NAME}}(pascalCase)ImplementationModel } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Implementation/{{NAME}}(pascalCase)Implementation.models';
import { {{NAME}}(pascalCase) } from '@lib/backend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)';
import {
  type {{NAME_ROOT}}(pascalCase)Model,
} from '@lib/shared/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';

@withContainer()
export class {{NAME}}(pascalCase)Implementation
  extends createEmbeddedResourceImplementation<
    {{NAME}}(pascalCase)Model,
    {{NAME_ROOT}}(pascalCase)Model,
  >({
    Resource: {{NAME}}(pascalCase),
    RootImplementation: {{NAME_ROOT}}(pascalCase)Implementation,
    name: {{NAME}}(constantCase)_RESOURCE_NAME,
  })
  implements {{NAME}}(pascalCase)ImplementationModel {}
