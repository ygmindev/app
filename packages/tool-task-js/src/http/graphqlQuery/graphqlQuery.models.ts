import { type GraphqlParamsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';

export type GraphqlQueryParamsModel = GraphqlParamsModel<object> & UriParamsModel;
