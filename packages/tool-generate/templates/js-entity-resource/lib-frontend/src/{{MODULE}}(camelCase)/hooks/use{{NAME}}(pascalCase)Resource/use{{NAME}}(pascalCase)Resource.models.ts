import type { EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import type { {{NAME}}(pascalCase)FormModel, {{NAME}}(pascalCase)Model } from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import type { {{NAME}}(pascalCase)ServiceModel } from '#lib-shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Service/{{NAME}}(pascalCase)Service.models';

export type Use{{NAME}}(pascalCase)ResourceModel = Pick<{{NAME}}(pascalCase)ServiceModel, 'get'>;
