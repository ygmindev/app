import type { EmbeddedResourceServiceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';
import type {
  {{NAME}}(pascalCase)FormModel,
  {{NAME}}(pascalCase)Model,
} from '@lib/shared/{{MODULE}}(pathCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import type { {{NAME_ROOT}}(pascalCase)Model } from '@lib/shared/{{MODULE_ROOT}}(camelCase)/resources/{{NAME_ROOT}}(pascalCase)/{{NAME_ROOT}}(pascalCase).models';

export interface {{NAME}}(pascalCase)ServiceModel
  extends EmbeddedResourceServiceModel<
    {{NAME}}(pascalCase)Model,
    {{NAME}}(pascalCase)FormModel,
    {{NAME_ROOT}}(pascalCase)Model,
  > {}
