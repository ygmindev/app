import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import {
  type {{NAME}}(pascalCase)Model,
} from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type {{NAME}}(pascalCase)ImplementationModel } from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Implementation/{{NAME}}(pascalCase)Implementation.models';
import { {{NAME}}(pascalCase) } from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)';

@withContainer({ name: `${{{NAME}}(constantCase)_RESOURCE_NAME}Implementation` })
export class {{NAME}}(pascalCase)Implementation
  extends createEntityResourceImplementation<{{NAME}}(pascalCase)Model>({
    Resource: {{NAME}}(pascalCase),
    name: {{NAME}}(constantCase)_RESOURCE_NAME,
  })
  implements {{NAME}}(pascalCase)ImplementationModel {}
