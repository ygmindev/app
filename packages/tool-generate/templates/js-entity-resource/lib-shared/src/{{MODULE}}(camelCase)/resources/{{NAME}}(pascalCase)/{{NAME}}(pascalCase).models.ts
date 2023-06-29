import {
type  EntityResourceDataModel,
  EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type {{NAME}}(pascalCase)Model = EntityResourceModel;

export type {{NAME}}(pascalCase)FormModel
  = EntityResourceDataModel<{{NAME}}(pascalCase)Model>;
