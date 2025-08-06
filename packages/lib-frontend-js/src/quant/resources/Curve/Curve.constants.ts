import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { CURVE_RESOURCE_NAME } from '@lib/model/quant/Curve/Curve.constants';
import { type CurveModel } from '@lib/model/quant/Curve/Curve.models';

export const CURVE_RESOURCE_PARAMS = {
  fields: [],
  name: CURVE_RESOURCE_NAME,
} satisfies ResourceParamsModel<CurveModel>;
