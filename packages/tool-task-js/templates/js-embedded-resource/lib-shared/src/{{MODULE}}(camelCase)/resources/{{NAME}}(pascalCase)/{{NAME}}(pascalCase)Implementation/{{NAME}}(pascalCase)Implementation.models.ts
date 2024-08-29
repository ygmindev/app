import { type EmbeddedResourceImplementationModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';
import {
type  {{NAME}}(pascalCase)FormModel,
  {{NAME}}(pascalCase)Model,
} from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type {{NAME_ROOT}}(pascalCase)Model } from '@lib/shared/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';

export type {{NAME}}(pascalCase)ImplementationModel = EmbeddedResourceImplementationModel<
    {{NAME}}(pascalCase)Model,
    {{NAME}}(pascalCase)FormModel,
    {{NAME_ROOT}}(pascalCase)Model,
  >;
