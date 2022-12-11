import type { GraphQlFieldModel } from '@lib/frontend/http/utils/graphQlQuery/graphQlQuery.models';
import type { LinkedUserModel } from '@lib/shared/user/resources/LinkedUser/LinkedUser.models';

export const LINKED_USER_FIELDS: Array<GraphQlFieldModel<LinkedUserModel>> = ['_id'];
