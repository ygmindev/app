import type { {{NAME}}(pascalCase)ServiceModel } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)Service/{{NAME}}(pascalCase)Service.models';

export interface Use{{NAME}}(pascalCase)ResourceModel
  extends Pick<{{NAME}}(pascalCase)ServiceModel, 'get'> {}
