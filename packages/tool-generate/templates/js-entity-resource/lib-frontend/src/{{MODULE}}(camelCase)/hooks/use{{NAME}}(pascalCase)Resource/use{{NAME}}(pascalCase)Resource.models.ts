import type { EntityResourceServiceModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import type { {{NAME}}(pascalCase)FormModel, {{NAME}}(pascalCase)Model } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

export interface Use{{NAME}}(pascalCase)ResourceModel
  extends Pick<EntityResourceServiceModel<
    {{NAME}}(pascalCase)Model,
    {{NAME}}(pascalCase)FormModel,
  >, 'get'> {}
