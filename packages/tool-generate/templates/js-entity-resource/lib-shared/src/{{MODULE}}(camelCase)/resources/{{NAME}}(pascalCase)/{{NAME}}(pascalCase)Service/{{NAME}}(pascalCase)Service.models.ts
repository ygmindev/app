import {
  type {{NAME}}(pascalCase)FormModel,
  type {{NAME}}(pascalCase)Model,
} from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/services/EntityResourceService/EntityResourceService.models';

export type {{NAME}}(pascalCase)ServiceModel = EntityResourceServiceModel<{{NAME}}(pascalCase)Model, {{NAME}}(pascalCase)FormModel>;
