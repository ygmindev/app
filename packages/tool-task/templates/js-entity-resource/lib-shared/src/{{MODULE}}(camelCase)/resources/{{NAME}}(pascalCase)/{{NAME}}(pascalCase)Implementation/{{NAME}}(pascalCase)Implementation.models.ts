import {
  type {{NAME}}(pascalCase)FormModel,
  type {{NAME}}(pascalCase)Model,
} from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type {{NAME}}(pascalCase)ImplementationModel = EntityResourceImplementationModel<
  {{NAME}}(pascalCase)Model,
  {{NAME}}(pascalCase)FormModel,
>;
