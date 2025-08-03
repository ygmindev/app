import {
  type {{NAME}}(pascalCase)Model,
} from '@lib/model/{{MODULE}}(camelCase)/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type {{NAME}}(pascalCase)ImplementationModel = EntityResourceImplementationModel<
  {{NAME}}(pascalCase)Model,
>;
