import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type {{NAME}}(pascalCase)Model = EmbeddedResourceModel & {
  name: string;
};

export type {{NAME}}(pascalCase)FormModel = EntityResourceDataModel<{{NAME}}(pascalCase)Model>;
