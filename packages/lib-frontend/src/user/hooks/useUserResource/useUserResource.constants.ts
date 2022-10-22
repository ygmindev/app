import type { GraphQlFieldModel } from '@lib/frontend/graphql/utils/graphQlQuery/graphQlQuery.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export const USER_FIELDS: Array<GraphQlFieldModel<UserModel>> = ['_id', 'first', 'last', 'email'];
