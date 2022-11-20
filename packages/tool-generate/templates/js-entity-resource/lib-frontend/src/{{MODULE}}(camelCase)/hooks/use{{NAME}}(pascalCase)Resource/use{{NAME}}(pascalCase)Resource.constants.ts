import type { GraphQlFieldModel } from '@lib/frontend/graphql/utils/graphQlQuery/graphQlQuery.models';
import type { {{NAME}}(pascalCase)Model } from '@lib/shared/{{MODULE}}(camelCase)/resources/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';

export const {{NAME}}(constantCase)_FIELDS: Array<GraphQlFieldModel<{{NAME}}(pascalCase)Model>> = ['_id'];
