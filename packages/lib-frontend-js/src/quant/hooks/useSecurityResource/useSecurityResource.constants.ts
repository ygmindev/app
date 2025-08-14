import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type SecurityModel } from '@lib/model/quant/Security/Security.models';

export const SECURITY_FIELDS = [
  '_id',
] satisfies GraphqlQueryParamsFieldsModel<SecurityModel>;
