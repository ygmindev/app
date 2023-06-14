import type { EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import type {
  {{NAME}}(pascalCase)FormModel,
  {{NAME}}(pascalCase)Model,
} from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

export interface {{NAME}}(pascalCase)ServiceModel
  extends EntityResourceServiceModel<{{NAME}}(pascalCase)Model, {{NAME}}(pascalCase)FormModel> {}
