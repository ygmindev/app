import { Curve } from '@lib/model/quant/Curve/Curve.entity';
import { CurveImplementation } from '@lib/model/quant/Curve/CurveImplementation/CurveImplementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { CURVE_RESOURCE_NAME } from '@lib/model/quant/Curve/Curve.constants';
import {
  type CurveModel,
} from '@lib/model/quant/Curve/Curve.models';
import { type CurveResolverModel } from '@lib/model/quant/Curve/CurveResolver/CurveResolver.models';

@withContainer()
@withResolver({ Resource: () => Curve })
export class CurveResolver
  extends createEntityResourceResolver<CurveModel>({
    Resource: () => Curve,
    ResourceImplementation: CurveImplementation,
    name: CURVE_RESOURCE_NAME,
  })
  implements CurveResolverModel {}
