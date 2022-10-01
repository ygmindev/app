import type { EmbeddedResourceServiceModel } from '@lib/shared/resource/utils/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';
import type {
  {{NAME}}(pascalCase)FormModel,
  {{NAME}}(pascalCase)Model,
} from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import type { {{NAME}}(pascalCase)Model } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

export interface {{NAME}}(pascalCase)ServiceModel
  extends EmbeddedResourceServiceModel<
    {{NAME}}(pascalCase)Model,
    {{NAME}}(pascalCase)FormModel,
    {{NAME}}(pascalCase)Model
  > {}
