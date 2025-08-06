import { type UseCurveResourceModel } from '@lib/frontend/quant/hooks/useCurveResource/useCurveResource.models';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import {
  type CurveModel,
} from '@lib/model/quant/Curve/Curve.models';
import { CURVE_RESOURCE_PARAMS } from '@lib/frontend/quant/resources/Curve/Curve.constants';

export const useCurveResource = (): UseCurveResourceModel =>
  useResource<CurveModel>({
    ...CURVE_RESOURCE_PARAMS,
  });
