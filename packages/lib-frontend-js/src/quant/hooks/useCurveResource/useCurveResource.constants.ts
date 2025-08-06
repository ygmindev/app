import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type CurveModel } from '@lib/model/quant/Curve/Curve.models';

export const CURVE_FIELDS = [
  '_id',
] satisfies GraphqlQueryParamsFieldsModel<CurveModel>;
