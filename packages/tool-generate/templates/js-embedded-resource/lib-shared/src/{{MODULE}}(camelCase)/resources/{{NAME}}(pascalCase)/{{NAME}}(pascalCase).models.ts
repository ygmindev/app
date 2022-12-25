import type { EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import type { EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface {{NAME}}(pascalCase)Model extends EmbeddedResourceModel {}

export interface {{NAME}}(pascalCase)FormModel
  extends EntityResourceDataModel<{{NAME}}(pascalCase)Model> {}