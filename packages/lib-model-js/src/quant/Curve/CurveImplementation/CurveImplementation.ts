import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { Curve } from '@lib/model/quant/Curve/Curve.entity';
import { CURVE_RESOURCE_NAME } from '@lib/model/quant/Curve/Curve.constants';
import { type CurveModel } from '@lib/model/quant/Curve/Curve.models';
import { type CurveImplementationModel } from '@lib/model/quant/Curve/CurveImplementation/CurveImplementation.models';

@withContainer()
export class CurveImplementation
  extends createEntityResourceImplementation<CurveModel>({
    Resource: Curve,
    name: CURVE_RESOURCE_NAME,
  })
  implements CurveImplementationModel {}
