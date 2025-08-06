import {
  type CurveModel,
} from '@lib/model/quant/Curve/Curve.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type CurveImplementationModel = EntityResourceImplementationModel<
  CurveModel,
>;
