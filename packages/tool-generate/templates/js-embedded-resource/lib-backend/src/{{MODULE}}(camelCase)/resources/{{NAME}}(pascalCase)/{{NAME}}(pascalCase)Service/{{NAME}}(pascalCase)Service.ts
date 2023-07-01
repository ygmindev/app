import { createEmbeddedResourceService } from '#lib-backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService';
import { {{NAME_ROOT}}(pascalCase)Service } from '#lib-backend/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase)Service/{{NAME_ROOT}}(pascalCase)Service';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { {{NAME}}(constantCase)_RESOURCE_NAME } from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).constants';
import {
type  {{NAME}}(pascalCase)FormModel,
  {{NAME}}(pascalCase)Model,
} from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type {{NAME}}(pascalCase)ServiceModel } from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Service/{{NAME}}(pascalCase)Service.models';
import {
type  {{NAME_ROOT}}(pascalCase)FormModel,
  {{NAME_ROOT}}(pascalCase)Model,
} from '#lib-shared/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';

@withContainer()
export class {{NAME}}(pascalCase)Service
  extends createEmbeddedResourceService<
    {{NAME}}(pascalCase)Model,
    {{NAME}}(pascalCase)FormModel,
    {{NAME_ROOT}}(pascalCase)Model,
    {{NAME_ROOT}}(pascalCase)FormModel,
  >({
    RootService: {{NAME_ROOT}}(pascalCase)Service,
    name: {{NAME}}(constantCase)_RESOURCE_NAME,
  })
  implements {{NAME}}(pascalCase)ServiceModel {}
