import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type {{NAME}}(pascalCase)Model = EntityResourceModel & {
  name: string;
};

export type {{NAME}}(pascalCase)FormModel = EntityResourceDataModel<{{NAME}}(pascalCase)Model>;
