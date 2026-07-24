import { type GraphqlQueryParamsFieldsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';
import { type CurveModel } from '@lib/model/quant/Curve/Curve.models';

export const CURVE_FIELDS = [
  '_id',
] satisfies GraphqlQueryParamsFieldsModel<CurveModel>;
