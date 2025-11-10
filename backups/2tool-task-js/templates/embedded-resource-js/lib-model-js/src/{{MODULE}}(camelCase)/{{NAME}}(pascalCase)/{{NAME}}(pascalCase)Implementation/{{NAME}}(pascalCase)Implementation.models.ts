import {
  type {{NAME}}(pascalCase)Model,
} from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type {{NAME_ROOT}}(pascalCase)Model } from '@lib/model/{{MODULE_ROOT}}(camelCase)/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';
import { type EmbeddedResourceImplementationModel } from '@lib/model/resource/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';

export type {{NAME}}(pascalCase)ImplementationModel = EmbeddedResourceImplementationModel<
  {{NAME}}(pascalCase)Model,
  {{NAME_ROOT}}(pascalCase)Model,
>;
