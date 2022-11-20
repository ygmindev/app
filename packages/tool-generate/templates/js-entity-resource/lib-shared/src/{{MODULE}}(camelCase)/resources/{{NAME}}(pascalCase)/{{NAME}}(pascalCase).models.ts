import type {
  EntityResourceDataModel,
  EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface {{NAME}}(pascalCase)Model extends EntityResourceModel {}

export interface {{NAME}}(pascalCase)FormModel
  extends EntityResourceDataModel<{{NAME}}(pascalCase)Model> {}
