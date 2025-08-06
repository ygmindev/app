import { type CurveModel } from '@lib/model/quant/Curve/Curve.models';
import { type MultiDataLoaderModel } from '@service/data/core/utils/MultiDataLoader/MultiDataLoader.models';

export type OisSwapRateLoaderModel = MultiDataLoaderModel<CurveModel>;
