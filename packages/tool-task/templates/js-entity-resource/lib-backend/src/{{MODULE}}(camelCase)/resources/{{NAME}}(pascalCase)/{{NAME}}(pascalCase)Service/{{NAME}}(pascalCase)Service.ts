import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceService } from '@lib/backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import {
  type {{NAME}}(pascalCase)FormModel,
  type {{NAME}}(pascalCase)Model,
} from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type {{NAME}}(pascalCase)ServiceModel } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Service/{{NAME}}(pascalCase)Service.models';
import { {{NAME}}(pascalCase) } from '@lib/backend/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)';

@withContainer({ name: `${{{NAME}}(constantCase)_RESOURCE_NAME}Service` })
export class {{NAME}}(pascalCase)Service
  extends createEntityResourceService<{{NAME}}(pascalCase)Model, {{NAME}}(pascalCase)FormModel>({
    Resource: {{NAME}}(pascalCase),
    name: {{NAME}}(constantCase)_RESOURCE_NAME,
  })
  implements {{NAME}}(pascalCase)ServiceModel {}
