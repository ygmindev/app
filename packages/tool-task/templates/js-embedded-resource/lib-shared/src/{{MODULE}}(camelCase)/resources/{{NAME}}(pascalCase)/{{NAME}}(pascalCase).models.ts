import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { {{NAME_ROOT}}(constantCase)_RESOURCE_NAME } from '@lib/shared/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).constants';
import { type {{NAME_ROOT}}(pascalCase)Model } from '@lib/shared/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';

export type {{NAME}}(pascalCase)Model = EmbeddedResourceModel & {
  [{{NAME_ROOT}}(constantCase)_RESOURCE_NAME]?: {{NAME_ROOT}}(pascalCase)Model;

  name?: string;
};

export type {{NAME}}(pascalCase)FormModel = EntityResourceDataModel<{{NAME}}(pascalCase)Model>;
