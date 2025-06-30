import {
  type {{NAME}}(pascalCase)Model,
} from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type {{NAME}}(pascalCase)ImplementationModel = EntityResourceImplementationModel<
  {{NAME}}(pascalCase)Model,
>;
